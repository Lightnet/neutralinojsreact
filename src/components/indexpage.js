/*
  LICENSE: MIT
  Created by: Lightnet

  Information:
    Index filter for url access by using router.

*/

// https://www.freecodecamp.org/news/how-to-use-react-router-version-6/

import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./about/aboutpage";
import HomePage from "./home/homepage";

export default function IndexPage(){

  return <>
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="about" element={ <AboutPage/> } />
      <Route path="setting" element={ <AboutPage/> } />

    </Routes>
  </>
}