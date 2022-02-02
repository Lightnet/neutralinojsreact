/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";
import ButtonApi from "./buttonapi";
import WindowHeader from "./neutralino/windowheader";

export default function MyApp(){

  return <>
    <WindowHeader />
    <div style={{
    position:'fixed'
    , top:'28px'
    , left:'0px'
    , width:'100%'
    , height:'100%'
    //, WebkitAppRegion:'drag'
    //, background:'#000000'
  }}>
    <label>Hello World! React.js!++</label>
    <ButtonApi></ButtonApi>
  </div>
  </>
}