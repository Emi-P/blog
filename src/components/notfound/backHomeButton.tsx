
interface ButtonProps {
    href: string;
}

export const Button = ({ href }: ButtonProps) => {
    return (
        <a href={href} className="backhomebutton">
            <span>Back Home</span>
        </a>
    );
}
