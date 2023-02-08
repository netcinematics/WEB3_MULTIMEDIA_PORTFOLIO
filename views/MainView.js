import Link from 'next/link';

export default function MainView() {

return (
    <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
    <section className="text-blue-600" style={{'font-size':'2.5em','font-weight': 'bold','paddingTop':'1em'}}>
        Welcome!
    </section>

    <p className="mt-3 text-2xl">
        <code className="rounded-md p-3 font-mono text-lg">
             Technical Skill, Creative Talent, Experience.
        </code>
    </p>

    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
    <Link href="/PDF_Resume_JS/PDFView"  className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">PDF Resume &rarr;</h3>
        <p className="mt-4 text-xl">
            High-level experience and success stories!
        </p>
    </Link>
    {/* <a href="https://nextjs.org/learn" className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"> */}
    <Link href="/PDF_Portfolio/PDFView"  className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">PDF Gallery &rarr;</h3>
        <p className="mt-4 text-xl">
        Also navigate PROJECTS with "Next" button (below).
        </p>
    </Link>
    {/* </a> */}
    <a href="https://nextjs.org/docs" className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">About &rarr;</h3>
        <p className="mt-4 text-xl">
        Learn about SPAZEFALCON.
        </p>
    </a>
    <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">Contact &rarr;</h3>
        <p className="mt-4 text-xl">
        Contact spazefalcon for your business needs.
        </p>
    </a>
    </div>
    </main>
)
}