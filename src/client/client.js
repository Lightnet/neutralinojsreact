/*
  LICENSE: MIT
  Created by: Lightnet

  Information:
    Browser client react.js entry point.
*/

console.log('Start React:',0);

import React from 'react';
import ReactDOM from 'react-dom';

import MyApp from "../components/app.js";

ReactDOM.render(<MyApp />, document.getElementById('neutralinoapp'));
//window.Neutralino.init(); // Add this function call
console.log(NL_PORT)
console.log('End React:1',1);
