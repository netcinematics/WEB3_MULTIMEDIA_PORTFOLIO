import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'
import TitleIMG from './img/Web3Tree.jpg'

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
    <p className="mt-6 text-2md">Web3 Ecosystem Map built in D3.js {' '}
        <code className="rounded-md p-3 font-mono  text-1md">  
        </code>

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

)}

