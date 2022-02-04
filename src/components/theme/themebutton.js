
import React from "react"

export default function ThemeButton(){

  async function clickToggle(){
    console.log('theme');
    let currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
      targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    //localStorage.setItem('theme', targetTheme);
    await Neutralino.storage.setData('theme', targetTheme)
  }

  return <button onClick={clickToggle}>
    Theme
  </button>
}