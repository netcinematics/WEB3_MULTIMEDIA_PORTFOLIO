export default function IntroView() {

return (
    <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
    <h1 className="text-6xl font-bold">
    <span className="text-md">~ CONTACT</span>{' '}
        LINKS ~
    </h1>

    <p className="mt-3 text-2xl">
        <code className="rounded-md p-3 font-mono text-lg">
        Ping Me - DM Open : )
        </code>
    </p>

    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
    <a href="https://linktr.ee/spazefalcon" target="_blank" rel="noopener noreferrer"
      className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">LINKTREE &rarr;</h3>
        <p className="mt-4 text-xl">
        Everything on LINKTREE.
        </p>
    </a>

    <a href="https://www.linkedin.com/in/nworth4/" target="_blank" rel="noopener noreferrer"
      className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">LINKEDIN &rarr;</h3>
        <p className="mt-4 text-xl">
        Professional Bio.
        </p>
    </a>

    <a href="https://github.com/netcinematics" target="_blank" rel="noopener noreferrer"
      className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">GITHUB &rarr;</h3>
        <p className="mt-4 text-xl">
          DISCORD: spazeFalcon#5533
        </p>
    </a>

    <a href="https://twitter.com/spazefalcon" target="_blank" rel="noopener noreferrer"
      className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">TWITTER &rarr;</h3>
        <p className="mt-4 text-xl">
        Follow me, say hi! :)
        </p>
    </a>
    </div>
    </main>
)
}