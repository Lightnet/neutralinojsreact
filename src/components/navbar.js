/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){

  return <div style={{
      width:'100%'
    , height:'28px'
    }}>
    <Link to="/">Home</Link><span> | </span>
    <Link to="/about">About</Link>
  </div>
}