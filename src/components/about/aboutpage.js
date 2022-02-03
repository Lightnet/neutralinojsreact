/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage(){

  return <>
    <label>About</label> <br />
    <Link to="/"> Home </Link> <br />
    <Link to="/about"> About </Link> <br />
  </>
}