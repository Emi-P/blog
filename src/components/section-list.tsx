import Emibox from './emibox'

const links = [
    { href: "https://example.com/link1", text: "Link 1" },
    { href: "https://example.com/link2", text: "ho la co mo an da s to do bi en emi me lla mo yo" },
    { href: "https://example.com/link3", text: "Link 3" },
    { href: "https://example.com/link3", text: "Link 3" },
    { href: "https://example.com/link3", text: "Link 3" },
    { href: "https://example.com/link3", text: "Link 3" },
    { href: "https://example.com/link3", text: "Link 3" },
    { href: "https://example.com/link3", text: "lorem ipsun" }
];

const SectionList: React.FC = () => {
    return (
        <div className=" grid gap-6">
            <Emibox title={"Hacking Write-ups"} links={links} desc={"My hacking write ups"} />
            <Emibox title={"Math Notes"} links={links} desc={"My hacking write ups"} />
        </div>
    );
};

export default SectionList;