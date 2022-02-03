/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";
import { Link } from "react-router-dom";
import ButtonApi from '../ui/buttonapi';

export default function HomePage(){

  return <>
    <label>Hello World! React.js!++</label> <br/>
    <Link to="/"> Home </Link> <br />
    <Link to="about"> About </Link> <br />
    <ButtonApi></ButtonApi>
  </>
}