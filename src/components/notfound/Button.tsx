
interface ButtonProps {
    href: string;
    className: string;
}

export const Button = ({ href, className }: ButtonProps) => {
    return (
        <a href={href} className={"Button " + className}>
            <span>Back Home</span>
        </a>
    );
}
