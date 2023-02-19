import { useState } from 'react';

export default function GalleryAudioBook({ nfts, batch, batchKey }) {
  const [index, setIndex] = useState(0);    //pages
  const [showMore, setShowMore] = useState(true);
  const [batchIDX, setBatch] = useState(1); //batch of 100 pageKey results
  const [loadingAudio, setLoadingAudio] = useState(1); //batch of 100 pageKey results

  function handleLastClick() {
    if(index<1){ setIndex(nfts.length-1)} //loop around index
    else { setIndex(index - 1); }
  }

  function handleNextClick() {
    if(index >= nfts.length-1){ setIndex(0); } //loop around index        
    else { setIndex(index + 1); }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  
  function handleLastBatch() {
    if(batchIDX===1){return}
    setIndex(0);
    let IDX = (batchIDX<=1)?1:batchIDX-1; 
    setBatch(IDX);
    if(batch){ batch.last(IDX); }
  }
  function handleNextBatch() {
    setIndex(0);
    let IDX = batchIDX+1; 
    setBatch(IDX);
    if(batch){ batch.next(IDX); }
  }    

  let nft = nfts[index];
//this works on rarible
//https://ipfs.io/ipfs/bafybeihiwjkalxowd63ep4iia4nhjwbasqw654yfwpscku5oe47447h77q/animation.mpga
//this is the broken path at nft.metadata.animation_url
//ipfs://ipfs/bafybeiba57fsy6ywpfl2ewumydw76yfu3asgv6o5puaeaw4vowwpdnmopq/animation.mpga
let audioPath = (nft && nft.metadata)? nft.metadata.animation_url : null;
if(audioPath){
  audioPath = audioPath.replace('ipfs://','https://');
  audioPath = audioPath.replace('ipfs/','ipfs.io/ipfs/');
}
return (

<main className="h-full w-full" style={{'backgroundImage':"url('../img/carbon_fibre2.png')"}}> 

  <div style={{color:'steelblue'}} className="h-full self-stretch items-stretch mb-1">        
  { (!nfts || nfts.length<1) ? <span>loading...</span>  :

<div className="flex flex-col bg-indigo-800/20 rounded-xl self-center items-center h-full ">
  { showMore ?
        <img className="flex h-8/10 sm:flex-auto w-auto  lg:max-w-2xl  md:max-w-2xl sm:max-w-2xl 
        rounded-xl self-center w-full my-4" style={{ width: 'auto', height: '50%' }} src={nft.media[0].gateway} />
        :
        <img className="flex h-8/10 sm:flex-auto w-auto  lg:max-w-2xl  md:max-w-2xl sm:max-w-2xl 
          rounded-xl self-center w-full my-4" style={{height: '70%', width: 'auto' }} src={nft.media[0].gateway} />
        }

      <audio preload="auto" controls 
        // complete={()=>{console.log('complete'); loadingAudio=false;} }
        onCanPlay={()=>{console.log('canplay1'); setLoadingAudio(false);} }
        // canplay={()=>{console.log('canplay2'); loadingAudio=false;} }
       src={ (audioPath)? audioPath :
         'https://ipfs.io/ipfs/bafybeihiwjkalxowd63ep4iia4nhjwbasqw654yfwpscku5oe47447h77q/animation.mpga'}>
      </audio>
      {/* <audio controls src="https://ipfs.io/ipfs/bafybeihiwjkalxowd63ep4iia4nhjwbasqw654yfwpscku5oe47447h77q/animation.mpga">
      </audio> */}
      {(loadingAudio)?'loading...':''}

     {/*//TODO:        <div data-player="true" data-url="https://ipfs.io/ipfs/bafybeihiwjkalxowd63ep4iia4nhjwbasqw654yfwpscku5oe47447h77q/animation.mpga" class="sc-bdvvtL sc-gsDKAQ sc-dkPtRN sc-bvZjhv LEuCB dqnTGd kryjMV"><button class="sc-bdvvtL sc-fKVqWL sc-bBHxTw sc-cxpSdN sc-llYSUQ sc-jJoQJp cDiMXI QejWU zgprO kyPRas dpuGUg sc-gyElHZ jmEuRo sc-rUGft bsquHD" type="button"><svg viewBox="0 0 24 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-iCfMLu iWfNDX"><path d="M17.8187 10.5192C18.9527 11.1807 18.9527 12.8193 17.8187 13.4808L9.22096 18.4961C8.07812 19.1628 6.64289 18.3384 6.64289 17.0154L6.64289 6.98463C6.64289 5.66156 8.07812 4.83721 9.22096 5.50387L17.8187 10.5192Z" fill="currentColor"></path></svg></button><div class="sc-bdvvtL sc-gsDKAQ sc-dkPtRN sc-jfBFGL qfAKJ dqnTGd hYLlhE"><div class="sc-kKTuYo joxFld" style="width: 0%;"></div></div><button class="sc-bdvvtL sc-fKVqWL sc-bBHxTw sc-cxpSdN cDiMXI QejWU zgprO sc-zCoBu icPVYQ" type="button">4:57</button><button class="sc-bdvvtL sc-fKVqWL sc-bBHxTw sc-cxpSdN sc-llYSUQ sc-jJoQJp cDiMXI QejWU zgprO kyPRas dpuGUg sc-gyElHZ jmEuRo sc-rUGft bsquHD" type="button"><svg viewBox="0 0 24 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-iCfMLu iWfNDX"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2177 18.3421C14.7415 18.8879 14.1002 19.25 13.2931 19.25C12.5539 19.25 11.876 18.5925 11.4004 18.1037L9.44335 15.8205C9.3002 15.6535 9.22151 15.4408 9.22151 15.2208V8.07496C9.22151 7.85499 9.3002 7.64228 9.44335 7.47527L11.3891 5.20521C11.8543 4.66985 12.5322 4.04578 13.2931 4.04578C14.1002 4.04577 14.7415 4.40782 15.2177 4.9536C15.6768 5.47982 15.9865 6.17729 16.202 6.90648C16.6336 8.36714 16.7486 10.1741 16.7486 11.6479C16.7486 13.1216 16.6336 14.9286 16.202 16.3893C15.9865 17.1184 15.6768 17.8159 15.2177 18.3421ZM5 9.80494C5 8.91434 5.72197 8.19237 6.61257 8.19237H7.53403C7.66126 8.19237 7.7644 8.29551 7.7644 8.42274V14.873C7.7644 15.0002 7.66126 15.1034 7.53403 15.1034H6.61257C5.72197 15.1034 5 14.3814 5 13.4908V9.80494ZM19.6562 8.7955C19.6076 8.41692 19.2613 8.14943 18.8827 8.19803C18.5041 8.24664 18.2366 8.59294 18.2852 8.97152C18.3996 9.86268 18.44 10.7987 18.44 11.648C18.44 12.4972 18.3996 13.4332 18.2852 14.3244C18.2366 14.703 18.5041 15.0493 18.8827 15.0979C19.2613 15.1465 19.6076 14.879 19.6562 14.5004C19.7802 13.5342 19.8222 12.5364 19.8222 11.648C19.8222 10.7595 19.7802 9.76173 19.6562 8.7955Z" fill="currentColor"></path></svg></button></div>
      */}
      {/* <video src="./copyrightNetCinematics/KRYPTOSONICZ/sonic2.mp3" controls="" style="padding: 0.888em; width: 100%; max-width: 28em; box-shadow: rgb(242, 238, 196) 2px 2px 8px 4px; border-radius: 6.666px; margin-bottom: 1em; max-height: 55px;"></video> */}
      {/* <video src="ipfs://ipfs/bafybeiba57fsy6ywpfl2ewumydw76yfu3asgv6o5puaeaw4vowwpdnmopq/animation.mpga" controls ></video> */}
      {/* <video src="nft.metadata.animation_url" controls="true" ></video> */}
      <datatray className="flex flex-col flex-2-0 border border-blue-400 rounded-lg m-2 p-2 overflow-auto" style={{'width':'95%'}}>
          <h2>
            <i>{nft.title} </i>
          </h2>
          {showMore ?  
          <button onClick={handleMoreClick} 
          style={{'display':'flex','align-self':'end','margin-top':'-24px','margin-bottom':'10px','margin-right':'5px'}}>
            <div>&#9660;</div>
          </button>
          : 
          <button onClick={handleMoreClick} 
          style={{'display':'flex','align-self':'end','margin-top':'-24px','margin-bottom':'10px','margin-right':'5px'}}>
            <div>&#9650;</div>
          </button>         
          }

          {showMore && <p>{(nft.description)?nft.description:'no data'}</p>}

      </datatray>
    </div>
  }
  </div>

  <footer className="flex  my-1 align-center text-center justify-center">
    { (batchKey || batchIDX>1)?
        <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md text-blue bg-blue-400 text-sm py-1 mr-2 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
          onClick={handleLastBatch}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg></button>
      :"" 
    }
    <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md text-blue bg-blue-400 text-sm py-1 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
      onClick={handleLastClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>LAST</button>
    <h3 className="mt-1 mx-2">{index + 1} of {nfts.length}</h3>
    <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md bg-blue-400 text-sm py-1 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-green-800 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
      onClick={handleNextClick}>
        NEXT<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg></button>
     { (batchKey)?
        <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md text-blue bg-blue-400 text-sm py-1 ml-2 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
          onClick={handleNextBatch}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg></button>
      :"" 
    }

  </footer>
{/* <style jsx >{` `}</style> */}
</main>
  );
}