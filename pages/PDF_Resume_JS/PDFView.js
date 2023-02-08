import ResumeView from './PDFResumeView';
import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function PDFView() { 
    const [NFTs, setNFTs] = useState([]);
    useEffect(() => { //Automatically load the book data.
    }, [])

    return (
      <div className="flex flex-col h-screen overflow-hidden justify-between bg-black text-blue-400">
        <header className="flex w-full justify-between items-center justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50">{/*BUTTON-FRAME*/}
          <Link className={"px-4 w-1/5 h-8"} href="/">
            <button className={"w-full h-full disabled:bg-slate-500 text-sm rounded-md text-blue bg-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"}>
              MAIN</button></ Link>
            <pagetitle className="flex" style={{'font-family':'fantasy','font-size':'1.5em', 'text-shadow':'4px 4px 3px purple'}}> 
              PDF RESUME
             </pagetitle>
          {/* <button disabled className={"disabled:bg-slate-500 disabled:hover:text-black text-xs rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
              onClick={ ()=>{ connectWallet() } 
            }>WALLET</button> */}

          <Link className={"px-4 w-1/5 h-8"} href="/PDF_Portfolio/PDFView">
          <button className={"w-full h-full disabled:bg-slate-500 text-sm rounded-md text-blue bg-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"}>
            PORTFOLIO</button>
          </Link>
        </header> 
        <featureframe className="flex w-full flex-1 flex-col items-center justify-center self-stretch items-stretch px-2 md:px-2 pt-6 pb-12 text-center  overflow-auto">
            <ResumeView />
        </featureframe>
      </div>
    )
  }

PDFView.getInitialProps = async (ctx) => { // FRONT-LOAD static CONTENT.
  const data = "boooook"; //await User.findOne(ctx.query.id)
  return {     // return props
      data
  }
}
