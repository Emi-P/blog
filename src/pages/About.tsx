import Layout from "../components/layout/layout"

export default function About() {
    return (
        <Layout>
                <h1 className=" text-center text-4xl md:text-7xl font-bold pt-5 md:pt-10 lg:mb-8 md:mb-8 mb-4">About me</h1>
                <p className="lg:ml-96 lg:mr-96 md:ml-48 md:mr-48 ml-6 mr-6 mb-0">
                    My name is Emi. I'm a third-year Computer Science student at UNC-FaMAF, focused on pursuing my degree and developing skills in the cybersecurity field.
                    I'm also a guitarist and a passionate music enthusiast.
                    I’m not sure what I’ll post here—probably some TryHackMe box write-ups, LaTeX math notes.
                </p>
        </Layout>
    )
}