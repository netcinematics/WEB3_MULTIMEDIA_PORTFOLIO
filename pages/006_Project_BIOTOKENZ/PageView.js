import GalleryBook from '../../components/NFTGalleryBook';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function BookView() { 
  // const [nextBatchKey,setBatchKey] = useState('');
  const [NFTs, setNFTs] = useState([]);

  useEffect(() => { //Automatically load the book data.
    fetchPolygonSpazefalcon();   
  }, [])

  async function fetchPolygonSpazefalcon(){    
    let nftids = {};
    //TODO: add your collection in .env.local: "https://polygon-mainnet.g.alchemy.com/nft/v2/yourKey/getNFTsForCollection?contractAddress=0xYourContractAddr"
    const fetchURL = `${process.env.NEXT_PUBLIC_fetch_spazebotz}`;
    var requestOptions = { method: 'GET'};
    nftids = await fetch(fetchURL, requestOptions).then(data => data.json())
    let nftz = []; 
    for(let i=0; i< nftids.nfts.length; i++){
      let nft;
      //TODO: add your collection ID LOOKUP: "https://polygon-mainnet.g.alchemy.com/nft/v2/yourAPIKey/getNFTMetadata?contractAddress=0xyourContractAddr&tokenId="
      const fetchCard = `${process.env.NEXT_PUBLIC_fetch_spazebot_itemz}${nftids.nfts[i].id.tokenId}`;
      nft = await fetch(fetchCard, requestOptions).then(data => data.json());
      if (nft) { nftz.push(nft); }        
    }
    if (nftz.length) {
      setNFTs(nftz);
    }
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between bg-black text-blue-400">
      <header className="flex w-full justify-between items-center justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50">
        <Link className={"px-4 w-1/5 h-8"} href="/">
            <button className={"w-full h-full disabled:bg-slate-500 text-sm rounded-md text-blue bg-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"}>
              MAIN</button></ Link>
        <booktitle className="flex"> 
          POLYGON_MAINNET - NFT_BOOK
        </booktitle>
        <button className={"text-xs rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
        >PORTFOLIO</button>

      </header> 
      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 md:px-20 pt-6 pb-12 text-center  overflow-auto">
        <GalleryBook nfts={NFTs}/>
      </main>
    </div>
  )
}

BookView.getInitialProps = async (ctx) => {
  // FRONT-LOAD static CONTENT.
  const data = "boooook"; //await User.findOne(ctx.query.id)
  console.log('init book1')
  return {     // return props
      data
  }
}
