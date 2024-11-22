import React from "react";

interface EmiboxProps {
    title: string;
    links: { href: string, text: string }[];
    desc: string;
}

const Emibox: React.FC<EmiboxProps> = ({ title, links, desc }) => {
    return (
        <div className="Emibox self-center place-content-center align-middle w-9/12 md:w-6/12 lg:w-6/12">
            {title &&
            <h1 className="Emibox-title text-2xl lg:text-4x1">{title}</h1>
            }
            
            {desc && (
            <div>

            <div className="Emibox-desc">
                <p className="text-sm ml-5 last:mb-1 pb-1 pt-1">
                    {desc}
                </p>
            </div>
            <hr className="mt-4 border-t-2 accent-1" />
            </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-1">
                {links.map((link, index) => (
                    <a key={index} href={link.href} className="ml-5 last:mb-2 pb-3 pt-3">
                        {link.text}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Emibox;