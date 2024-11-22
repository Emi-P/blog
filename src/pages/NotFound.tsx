import Layout from "../components/layout";

const notfoundgifs = [
    "https://giphy.com/embed/26FPGt0CsPqPAmXg4",
    "https://giphy.com/embed/UHAYP0FxJOmFBuOiC2",
    "https://giphy.com/embed/9u1a9OpefHcuKN9i2G",
    "https://giphy.com/embed/YyKPbc5OOTSQE",
]

export default function NotFound() {
    return (
    <Layout>
        <h1 className="text-center text-4xl m-4 font-bold"> This page does not exist</h1>
        <div className="flex justify-center align-middle">
            <iframe src={notfoundgifs[Math.floor(Math.random() * notfoundgifs.length)]} width="480" height="480" frameBorder="0" allowFullScreen></iframe>
        </div>
    </Layout>
    );
}