import Link from 'next/link';

export default function MainView(main) {

return (
    <main id="mainView" className="flex w-full flex-1 flex-col items-center justify-center text-center">
    <section className="text-blue-600" style={{'font-size':'2.5em','font-weight': 'bold','paddingTop':'1em'}}>
        Welcome!
    </section>

    <p className="mt-3 text-2xl">
        <code className="rounded-md p-3 font-mono text-lg">
             Technical Skill, Creative Talent, & Experience.
        </code>
    </p>

    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
    <section className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:shadow-blue-500 shadow-md"
    onClick={ ()=>{
        main.main.next();
    }
    }>

        <h3 className="text-2xl font-bold">PROJECT Gallery</h3>
        <p className="mt-4 text-xl" style={{'display':'flex','justify-content':'flex-end'}}>
        &rarr; NEXT &larr;
        </p>
    </section>
    <Link href="/PDF_Resume_JS/PDFView"  className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:shadow-blue-500 shadow-md">
        <h3 className="text-2xl font-bold">PDF Resume </h3>
        <p className="mt-4 text-xl">
         Success stories! &rarr;
        </p>
    </Link>
    <Link href="/PDF_Portfolio/PDFView"  className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:shadow-blue-500 shadow-md ">
        <h3 className="text-2xl font-bold">PDF Portfolio</h3>
        <p className="mt-4 text-xl">
        Visual Timeline &rarr;
        </p>
    </Link>
    {/* <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" */}
        {/* className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:shadow-blue-500 shadow-md"> */}
    <section className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:shadow-blue-500 shadow-md"
    onClick={ ()=>{
        main.main.contact();
    }
    }>
        <h3 className="text-2xl font-bold">Contact </h3>
        <p className="mt-4 text-xl">
         How can I help you? &rarr;
        </p>
   </section>
    {/* </a> */}
    </div>

    <p className="mt-3 text-2xl">
        <code className="rounded-md p-3 font-mono text-lg">
            Looking for opportunity.
        </code>
    </p>
    </main>
)
}