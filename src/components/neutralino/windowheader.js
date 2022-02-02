

import React, { useEffect } from "react";

export default function WindowHeader(){

  useEffect(async()=>{
    if(Neutralino){
      await Neutralino.window.setDraggableRegion('WindowHeader');
      //await Neutralino.window.unsetDraggableRegion('IconRight');
    }
  },[])

  const style={
    position:'fixed'
    , top:'0px'
    , left:'0px'
    , width:'100%'
    , height:'28px'
    , background:'#A9A9A9'
    , WebKitAppRegion:'drag'
  };

  async function windowMini(){
    //console.log('minimize');
    if(!Neutralino)return;
    await Neutralino.window.minimize();
  }

  async function clickToggleScreen(){
    if(!Neutralino)return;
    let status = await Neutralino.window.isFullScreen();
    if(status){
      await Neutralino.window.exitFullScreen();
    }else{
      await Neutralino.window.setFullScreen();
    }
  }

  async function clickClose(){
    //console.log('close');
    if(!Neutralino)return;
    await Neutralino.app.exit();
  }

  async function clickReload(){
    //console.log('close');
    if(!Neutralino)return;
    await Neutralino.app.restartProcess({ args: '--restarted' });
  }

  return <>
  <div id="WindowHeader" style={style}>
    
  </div>
  <div style={{position:'fixed',left:'0px',top:'0px'}}>
    <button> (=) </button>
    <button onClick={clickReload}> Reload </button>
  </div>
  <div style={{position:'fixed',right:'0px',top:'0px'}}>
    <button onClick={windowMini}> _ </button>
    <button onClick={clickToggleScreen}> [=] </button>
    <button onClick={clickClose}> X </button>
  </div>
</>
}
// note layer effect drag