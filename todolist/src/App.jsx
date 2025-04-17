import React, { createContext } from 'react'
import Header from "./compnents/Header"
import Main from './compnents/Main'
import Footer from './compnents/Footer'
import Counter from './Counter'
import { useState } from 'react'

export let userContext=createContext()
function App() {
  let [user,setUser]=useState({
    name:"vasanth",
    age:21,
    Email:"abc@gmail.com"
  })
  return (
    <userContext.Provider value={{user}}>
    <div className='app'>
      <Header />
      <Main />
      <Footer />
      
    </div>
    </userContext.Provider>
  )
}

export default App