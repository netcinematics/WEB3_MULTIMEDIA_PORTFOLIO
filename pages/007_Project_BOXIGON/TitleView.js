import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'
import TitleIMG from './img/boxigon1.png'

export default function TitleView() {

    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

return (
    
 <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
    {/* <Link href="/004_Project_SPAZEBOTZ/PageView" className="flex items-center justify-center text-center"> */}
    <a href="https://store.steampowered.com/app/842490/BOXiGON/" target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center text-center">
        {showMore ?
        <Image src={TitleIMG} alt="Title Cover" className="rounded-xl shadow-lg hover:shadow-blue-400 shadow-cyan-500 active:shadow-indigo-500" alt="" width={600} height={600} style={{width:'70%'}} />
        :
        <Image src={TitleIMG} alt="Title Cover" className="rounded-xl shadow-lg hover:shadow-blue-400 shadow-cyan-500 active:shadow-indigo-500" alt="" width={600} height={600} style={{height:'620px'}} />
        }
        </a>
    {/* </Link> */}
    <p className="mt-6 text-2md">BOXiGON! | WEBGL JavaScript | Puzzle Game on STEAM {' '}
        <code className="rounded-md p-3 font-mono  text-1md">  
        </code>

        <button onClick={handleMoreClick}>
           {showMore ? <div>hide &#9650;</div> : <div>info &#9660;</div>}
        </button>
           {showMore && <p style={{margin:'1em 4em'}}>
           
            BOXIGON - a fun and challenging 3D game built in WEBGL with JavaScript and BabylonJS. 
            To gain mastery in 3D and Metaverse. Features explosions and 10 puzzles, with 4 levels of MASTERY.
            Can you open the BOX? Can you gain BOXiGON~MASTER badge? Deployed to multiple PRODUCTION app stores.
           </p>}


    </p>

    <button className="mt-2 pb-1 pt-1 px-4 rounded-xl border items-center justify-center text-center border-b-2 border-blue-400  hover:shadow-blue-500 hover:border-indigo-500/50 p-1 text-left text-blue-600 hover:text-indigo-600 active:text-slate-700 shadow-lg shadow-blue-500/50 active:shadow-indigo-500">
        <a href="https://store.steampowered.com/app/842490/BOXiGON/" target="_blank" rel="noopener noreferrer"
      className="mt-6 w-96">
            ~OPEN~
            </a>
            </button>
</main> 

)}

