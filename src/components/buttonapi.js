


import React from "react";

export default function ButtonApi(){

  async function clickTest(){
    let rep = await fetch('http://localhost:8080/api/test');
    console.log(rep);
    let data = await rep.json();
    console.log(data);
  }

  return <>
    <button onClick={clickTest}>Test API</button>
  </>
}