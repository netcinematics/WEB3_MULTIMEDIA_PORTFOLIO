import Link from 'next/link';

export default function AboutView() {

return (
    <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
    <h1 className="text-6xl font-bold">
    <span className="text-md">SPAZEFALCON</span>{' '}
    <a className="text-blue-600" href="https://linktr.ee/spazefalcon">
        PORTFOLIO!
    </a>
    </h1>

    <p className="mt-3 text-2xl">
    <code className="rounded-md p-3 font-mono text-lg">
    Technical Skills, combined with Creative Talent.
    </code>
    </p>

    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
    <a href="https://nextjs.org/docs"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
        <h3 className="text-2xl font-bold">About &rarr;</h3>
        <p className="mt-4 text-xl">
        Learn about SPAZEFALCON.
        </p>
    </a>

    <a href="https://nextjs.org/learn"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
        <h3 className="text-2xl font-bold">Gallery &rarr;</h3>
        <p className="mt-4 text-xl">
        See many digital creations.
        </p>
    </a>

    {/* <a href="https://github.com/vercel/next.js/tree/canary/examples"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"
    > */}
    <Link href="/Resume_JS/PDFView"  className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">Resume &rarr;</h3>
        <p className="mt-4 text-xl">
        PDF resume of high-level experiences and technical skills.
        </p>
    </Link>

    <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
        <h3 className="text-2xl font-bold">Contact &rarr;</h3>
        <p className="mt-4 text-xl">
        Contact spazefalcon for your business needs.
        </p>
    </a>
    </div>
    </main>
)
}