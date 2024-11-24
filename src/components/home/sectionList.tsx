import Emibox from './emibox'

const mathNotesPrefix = "/blog/math-notes";
const mathNotes = [
    { href: mathNotesPrefix + "/probabilidad_y_estadistica.pdf", text: "Probabilidad y estadística" },
    { href: mathNotesPrefix + "/notas_sobre_polinomios_ortogonales.pdf", text: "Polinomios ortogonales" },
];
const links = [
    { href: "linkfalso.com", text: "link falso" },
    { href: "linkfalso.com", text: "link falso" },
    { href: "linkfalso.com", text: "link falso" },

]

const SectionList: React.FC = () => {
    return (
        <div className=" grid gap-6">
            <Emibox title={"Hacking Write-ups"} links={links} desc={"My hacking write ups"}/>
            <Emibox title={"Math Notes"} links={mathNotes} desc={""} seeAll={{ text: "Ver todo", href: "math-notes" }} />
        </div>
    );
};

export default SectionList;