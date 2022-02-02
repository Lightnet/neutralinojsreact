/*
  LICENSE: MIT
  Created by: Lightnet
*/

// https://neutralino.js.org/docs/api/storage

import React, { createContext, useEffect, useMemo, useState} from "react";

export const themeContext = createContext();

export function useTheme(){
  const context = useContext(themeContext);
  if (!context) {
    throw new Error(`useTheme must be used within a themeContext`)
  }
  return context;
}

export function ThemeProvider(props){

  const [theme, setTheme] = useState(false);

  //check theme
  useEffect(()=>{

  },[])

  const value = useMemo(()=>({
    theme, setTheme
  }),[
    theme
  ])

  return <themeContext.Provider value={value}  {...props}/>
}