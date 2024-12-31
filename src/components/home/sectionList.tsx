import Emibox from './emibox'

const mathNotesPrefix = "/math-notes";
const mathNotes = [
    { href: mathNotesPrefix + "/probabilidad_y_estadistica.pdf", text: "Probabilidad y estadística" },
    { href: mathNotesPrefix + "/notas_sobre_polinomios_ortogonales.pdf", text: "Polinomios ortogonales" },
];

const writeupsPrefix = "/writeups";
const writeups = [
    { href: writeupsPrefix + "/format-strings-1", text: "Format strings 1 (PicoCTF)" },
    { href: writeupsPrefix + "/buffer-overflow-1", text: "Buffer overflow 1 (PicoCTF)" },
];

const SectionList: React.FC = () => {
    return (
        <div className=" grid gap-6">
            <Emibox title={"Math Notes"} links={mathNotes} desc={""} seeAll={{ text: "Ver todo", href: "math-notes" }} />
            <Emibox title={"Writeups"} links={writeups} desc={""} seeAll={{ text: "Ver todo", href: "writeups" }} />
        </div>
    );
};

export default SectionList;