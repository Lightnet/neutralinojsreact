/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";

import IndexPage from "./indexpage";
import { NeutralinoProvider } from "./neutralino/neutralinoprovider";
import WindowHeader from "./neutralino/windowheader";
import { ThemeProvider } from "./theme/themeprovider";

import {
  BrowserRouter
} from "react-router-dom";
import NavBar from "./navbar";
export default function MyApp(){

  return <ThemeProvider>
    <NeutralinoProvider>
      <BrowserRouter>
        <WindowHeader />

        <div style={{
        position:'fixed'
        , top:'26px'
        , left:'0px'
        , width:'100%'
        , height:'100%'
        //, WebkitAppRegion:'drag'
        //, background:'#000000'
        }}>
          <NavBar />
          <IndexPage></IndexPage>
        </div>
      </BrowserRouter>
    </NeutralinoProvider>
  </ThemeProvider>
}