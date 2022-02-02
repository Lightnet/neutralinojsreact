/*
  browser client react.js ...

*/

console.log('Start React:',0);

import React from 'react';
import ReactDOM from 'react-dom';

import MyApp from "./app.js";

ReactDOM.render(<MyApp />, document.getElementById('neutralinoapp'));
//window.Neutralino.init(); // Add this function call
console.log('End React:1',1);
