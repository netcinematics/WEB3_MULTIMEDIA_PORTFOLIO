import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'
import TitleIMG from './img/spazebotzTitle_1080_SQ_5.jpg'

export default function TitleView() {

    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

return (
    
 <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
    <Link href="/004_Project_SPAZEBOTZ/PageView" className="flex items-center justify-center text-center">
        {showMore ?
        <Image src={TitleIMG} alt="Title Cover" className="rounded-xl shadow-lg hover:shadow-blue-400 shadow-cyan-500 active:shadow-indigo-500" alt="" width={600} height={600} style={{width:'70%'}} />
        :
        <Image src={TitleIMG} alt="Title Cover" className="rounded-xl shadow-lg hover:shadow-blue-400 shadow-cyan-500 active:shadow-indigo-500" alt="" width={600} height={600} />
        }
    </Link>
    <p className="mt-6 text-2md">Originz in SpazeBotCity {' '}
        <code className="rounded-md p-3 font-mono  text-1md">2020-{new Date().getFullYear()} &copy;  
        </code>
        {/* <section><span>&#9650; &#9660;</span></section> */}

        <button onClick={handleMoreClick}>
           {showMore ? <div>hide &#9650;</div> : <div>info &#9660;</div>}
        </button>
           {showMore && <p style={{margin:'1em 4em'}}>
           
           CRYPTOBOOKZ - is a design pattern of NFTs, minted on Polygon MainNet, curated as pages in a book.

           Built with NextJS and TailwindCSS from Alchemy Road To Web3 NFT Gallery project.
           It demonstrates navigation patterns, with added features of: loop around capability, routing, and dynamic views.

           The CODE is MIT, the artwork is &copy; spazefalcon 2020-{new Date().getFullYear()} &copy;
           CRYPTOBOOKZ, SPAZEBOTZ, COZMOSPAZE, OrbyOrbot, characters,story and art is &trade; All rights reserved.
           
           </p>}


    </p>
    <Link href="/004_Project_SPAZEBOTZ/PageView">
        <button className="mt-2 pb-1 pt-1 px-4 rounded-xl border items-center justify-center text-center border-b-2 border-blue-400  hover:shadow-blue-500 hover:border-indigo-500/50 p-1 text-left text-blue-600 hover:text-indigo-600 active:text-slate-700 shadow-lg shadow-blue-500/50 active:shadow-indigo-500">
            ~OPEN~</button></Link>
</main> 



// <galleryframe className="h-full"> 

// <div style={{color:'steelblue'}} className="h-full self-stretch items-stretch mb-1">        
// { (!nfts || nfts.length<1) ? <span>loading...</span>  :

//   <div className="flex flex-col bg-indigo-800/20 rounded-xl self-center items-center h-full ">
//     { showMore ?
//       <img className="flex h-8/10 sm:flex-auto w-auto  lg:max-w-2xl  md:max-w-2xl sm:max-w-2xl 
//         rounded-xl self-center w-full my-4" style={{ width: 'auto', height: '50%' }} src={nft.media[0].gateway} />
//       :
//       <img className="flex h-8/10 sm:flex-auto w-auto  lg:max-w-2xl  md:max-w-2xl sm:max-w-2xl 
//         rounded-xl self-center w-full my-4" style={{height: '70%', width: 'auto' }} src={nft.media[0].gateway} />
//     }

//     <datatray className="flex flex-col flex-2-0 border border-blue-400 rounded-lg m-2 p-2 overflow-auto">
//         <h2>
//           <i>{nft.title} </i>
//         </h2>

//         <button onClick={handleMoreClick}>
//           {showMore ? 'Hide' : 'Show'}
//         </button>
//         {showMore && <p>{(nft.description)?nft.description:'no data'}</p>}

//     </datatray>
//   </div>
// }
// </div>

// <footer className="flex  my-1 align-center text-center justify-center">
//   { (batchKey || batchIDX>1)?
//       <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md text-blue bg-blue-400 text-sm py-1 mr-2 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
//         onClick={handleLastBatch}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
//           </svg></button>
//     :"" 
//   }
//   <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md text-blue bg-blue-400 text-sm py-1 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
//     onClick={handleLastClick}>
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
//       </svg>LAST</button>
//   <h3 className="mt-1 mx-2">{index + 1} of {nfts.length}</h3>
//   <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md bg-blue-400 text-sm py-1 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-green-800 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
//     onClick={handleNextClick}>
//       NEXT<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//       </svg></button>
//    { (batchKey)?
//       <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md text-blue bg-blue-400 text-sm py-1 ml-2 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
//         onClick={handleNextBatch}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//       </svg></button>
//     :"" 
//   }

// </footer>
// </galleryframe>





)}

