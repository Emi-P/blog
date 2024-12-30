
interface ButtonProps {
    href: string;
    text: string;
    className: string;
}

export const Button = ({ href, text, className }: ButtonProps) => {
    return (
        <a href={href} className={"Button " + className}>
            <span>{text}</span>
        </a>
    );
}
