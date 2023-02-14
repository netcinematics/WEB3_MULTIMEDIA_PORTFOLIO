import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'
import TitleIMG from './img/PirateorNinja.png'

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
    <p className="mt-6 text-2md">Pirate or Ninja | Self-Assign | Digital Identity (SBT) {' '}
        <code className="rounded-md p-3 font-mono  text-1md">  
        </code>

        <button onClick={handleMoreClick}>
           {showMore ? <div>hide &#9650;</div> : <div>info &#9660;</div>}
        </button>
           {showMore && <p style={{margin:'1em 4em'}}>
           
            PIRATE_or_NINJA - is an EXPERIMENT to learn the subtle complexities of DIGITAL_IDENTITY_DESIGN.
            The beauty of Pirate_or_Ninja, is that it is an MVC for self-assigned-identity mechanism. 
            Where you MINT your own ID... for FREE. As Vitalik himself notes, Soul Bound Tokens are still very early.
            It is this type of experiment which sheds light on the real-world problems, and what is required to resolve them.
            While this particular attempt is light-weight, light-hearted and FUN. It does lead to some seriously complex issue very rapidly.
            That is the purpose of this project is to learn more about SOUL BOUND TOKENS, while exploring variation of DIGITAL_IDENTITY_DESIGN, in this project called DIDz.
           </p>}


    </p>

    <button className="mt-2 pb-1 pt-1 px-4 rounded-xl border items-center justify-center text-center border-b-2 border-blue-400  hover:shadow-blue-500 hover:border-indigo-500/50 p-1 text-left text-blue-600 hover:text-indigo-600 active:text-slate-700 shadow-lg shadow-blue-500/50 active:shadow-indigo-500">
        <a href="https://testnets.opensea.io/0xd5A0c036B0693A156042F0D3bFD84174B42cfDC7" target="_blank" rel="noopener noreferrer"
      className="mt-6 w-96">
            ~OPEN~
            </a>
            </button>
</main> 

)}

