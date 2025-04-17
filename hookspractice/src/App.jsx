import React,{ useEffect }  from 'react'
import {useState} from 'react'

function App() {
  const [num1,setNum1]=useState(100);

  useEffect(()=>{
    setNum1(200);
    console.log(num1);
    
  },[])
  console.log(num1)
  return (
    <div><h1>{num1}</h1>
    <button onClick={()=>setNum1((current)=>current+1)}>ADD</button></div>
  )
}

export default App