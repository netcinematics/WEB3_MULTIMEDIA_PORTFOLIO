import Link from 'next/link';
import Head from 'next/head'
import { useState } from 'react';
import MainView from '../views/MainView'
import ContactView from '../views/ContactView'
import DynamicView001 from './001_Project/TitleView'
import DynamicView002 from './002_Project/TitleView'
import DynamicView003 from './003_Project/TitleView'
import SPAZEBOTZView004 from './004_Project_SPAZEBOTZ/TitleView'
import Web3TreeView005 from './005_Project_Web3Tree/TitleView'
import BIOTOKENZView006 from './006_Project_BIOTOKENZ/TitleView'

const portfolio_app = () => {
  const [viewIDX, setViewIDX] = useState('MainView');
  const [projectIDX, setProjectIDX] = useState(0); 

  const loadProject_TitleLast = () => { 
    if(projectIDX<1){ setProjectIDX(viewList.length-1); setViewIDX("DynamicView");} //loop around index
    else { setProjectIDX(projectIDX - 1); }
  };

  const loadProject_TitleNext = () => {
    if(projectIDX >= viewList.length-1){ setProjectIDX(0); setViewIDX("DynamicView"); } //loop around index        
    else { setProjectIDX(projectIDX + 1); setViewIDX("DynamicView"); }
  };

  const renderviewList = (pageNUM) => {
    if (projectIDX > viewList.length){ return viewList[0]; }
    return viewList[projectIDX];
  };
 
  let main = {}; main.next = function(){ loadProject_TitleNext(); }
  main.contact = function(){setProjectIDX(0); setViewIDX("ContactView");}
  let viewList = [<MainView main={main}/>,<SPAZEBOTZView004/>,<DynamicView001/>,<DynamicView003/>,<Web3TreeView005/>,<BIOTOKENZView006/>,<ContactView/>];  

  return (
    <div className="flex min-h-screen flex-col bg-black text-slate-600 items-center justify-center">
      <Head>
        <title>PORTFOLIO</title>
        <link rel="icon" href="/icon1.ico" />
      </Head>

      <header style={{'box-shadow': '0px 3px 20px 1px blue', 'margin-bottom': '20px'}} className="flex w-full items-center justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50  ">{/*BUTTON-FRAME*/}
        <button className="flex" style={{'font-family':'fantasy', 'font-size':'1.8em', 'textShadow':'0px 3px 20px purple'}}
          onClick={ ()=>{ setProjectIDX(0); setViewIDX("MainView"); }}>
          SPAZEFALCON PORTFOLIO
        </button>
      </header> 
      {/* custom html frames - advanced */}
      <viewlistframe className="flex w-full flex-1 flex-col items-center justify-center px-2 md:px-20 text-center">
      {         
        (() => { //DYNAMIC-VIEW-DISPLAY (design~innovation)
          if (viewIDX === "DynamicView") {
            return renderviewList();
          } else if (viewIDX === "MainView") {
            return <MainView main={main} /> ;
          } else if (viewIDX === "ContactView") {
            return <ContactView /> ;
          }
        })()
      }
      </viewlistframe>
      <footer className="flex h-15 py-3 w-full mt-5 px-2 md:px-10 justify-between items-center justify-center border-t-2 border-t-indigo-500/50">

      <Link href="/PDF_Resume_JS/PDFView">
        Resume
      </Link>

      <projectnav className="flex w-auto justify-between justify-center items-center">
        <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-1 my-1 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
          onClick={ ()=>{ loadProject_TitleLast() }
        }>LAST</button>

        <projectnum className="mx-1 sm:mx-4"> {projectIDX + 1} of {viewList.length}</projectnum>

        <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-1 my-1 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
          onClick={ ()=>{ loadProject_TitleNext() }
        }>NEXT</button>
      </projectnav>

      <Link href="/PDF_Portfolio/PDFView">
        Portfolio
      </Link>

      </footer>
      <style jsx global>{`
      main { 
        border-radius: 13px;
        background-image: url('img/carbon_fibre2.png');
      }
      header { 
        border-radius: 13px;
        background: url(img/circle-blues.png) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      `}</style>
    </div>
  )
}

export default portfolio_app
