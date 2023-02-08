import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

import MainView from '../views/MainView'
import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'
import DynamicView001 from './001_Project/TitleView'
import DynamicView002 from './002_Project/TitleView'
import DynamicView003 from './003_Project/TitleView'

const portfolio_app = () => {
  const [viewIDX, setViewIDX] = useState('MainView');
  const [projectIDX, setProjectIDX] = useState(0); 

  const loadProject_TitleLast = () => { 
    if(projectIDX<1){ setProjectIDX(viewList.length-1)} //loop around index
    else { setProjectIDX(projectIDX - 1); }
  };

  const loadProject_TitleNext = () => {
    if(projectIDX >= viewList.length-1){ setProjectIDX(0); setViewIDX("DynamicView"); } //loop around index        
    else { setProjectIDX(projectIDX + 1); setViewIDX("DynamicView"); }
  };

  const renderviewList = (pageNUM) => {
    let page = null;
    if (projectIDX===0){ return viewList[0];
    } else if (projectIDX===1){ return viewList[1];
    } else if (projectIDX===2){ return viewList[2];
    } else if (projectIDX===3){ return viewList[3];
    } else { return viewList[4];
    }  
  };

  let viewList = [<MainView/>,<DynamicView001/>,<DynamicView002/>,<DynamicView003/>,<AboutView/>,<ContactView/>];  

  return (
    <div className="flex min-h-screen flex-col bg-black text-slate-600 items-center justify-center">
      <Head>
        <title>PORTFOLIO</title>
        <link rel="icon" href="/icon1.ico" />
      </Head>

      <header style={{'box-shadow': '0px 3px 20px 1px blue', 'margin-bottom': '20px'}} className="flex w-full items-center justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50  ">{/*BUTTON-FRAME*/}
          {/* <button disabled className={"disabled:bg-slate-500 disabled:hover:text-black rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
            onClick={ () => { loadBooks_TitleMain(); } }
            ><Link href="/">MAIN</ Link></button> */}
          {/* <Link href="/"> */}
            <button className="flex" style={{'font-family':'fantasy', 'font-size':'1.8em', 'textShadow':'0px 3px 20px purple'}}
              onClick={ ()=>{ setProjectIDX(0); setViewIDX("MainView"); }}>
              SPAZEFALCON PORTFOLIO
            </button>
          {/* </ Link> */}
          {/* <button disabled className={"disabled:bg-slate-500 disabled:hover:text-black text-xs rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
              onClick={ ()=>{ connectWallet() }
          }>CONNECT WALLET
          </button> */}
    
      </header> 
      {/* custom html frames - advanced */}
      <viewlistframe className="flex w-full flex-1 flex-col items-center justify-center px-2 md:px-20 text-center">
      {         
        (() => { //DYNAMIC-VIEW-DISPLAY (design~innovation)
          if (viewIDX === "DynamicView") {
            return renderviewList();
          } else if (viewIDX === "MainView") {
            return <MainView /> ;
          } else if (viewIDX === "AboutView") {
            return <AboutView /> ;
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

        {/* <button className={""} 
            onClick={ ()=>{ setViewIDX("AboutView");}
        }>about</button>  */}
        <projectnav className="flex w-auto justify-between justify-center items-center">
          <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-1 my-1 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
            onClick={ ()=>{ loadProject_TitleLast() }
          }>LAST</button>

          <projectnum className="mx-1 sm:mx-4"> {projectIDX + 1} of {viewList.length}</projectnum>

          <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-1 my-1 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
            onClick={ ()=>{ loadProject_TitleNext() }
          }>NEXT</button>
        </projectnav>

        {/* <button className={""} 
            onClick={ ()=>{ setViewIDX("ContactView");} 
        }>contact</button>  */}

      <Link href="/PDF_Portfolio/PDFView">
        Portfolio
      </Link>

      </footer>
      <style jsx global>{`
      main { 
        border-radius: 13px;
        background-image: url('img/carbon_fibre1.png');
        
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
