import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const[data,setData]=useState("LoadPhase")
    function handleCount(){
        setCount((curr)=>{
            return curr+1
        })
    }
    let message;
    function decCount(){
        setCount((curr)=>{
            return curr-1
        })
    }
    function Practiceswitch(){
        switch(data){
            case "LoadPhase":return <LoadPhase />
                break;
            case "SuccessPhase":return <SuccessPhase />
                break;
            case "ErrorPhase":return <ErrorPhase />
                break;
        }
    }
    if (count<10){
        message=(
            <h1>you less then 10</h1>
        )
    }
    else{
        message=(
            <h1>You greater then 10</h1>
        )
    }
  return (

    <div>
        <h1>{count}</h1>
        <button onClick={handleCount}>INCREASE</button>
        <button onClick={decCount}>DECREASE</button>
        <p>{message} {Practiceswitch()}</p>
        {
            count>10-1? (<p>you reached 10</p>):
            (<p>you less then 10</p>)
        }
    </div>
  )
}

export default Counter

function LoadPhase(){
    return (
        <h1>LOADING🤔</h1>
    )
}
function SuccessPhase(){
    return (
        <h1>
            SUCCESS😁
        </h1>
    )
}
function ErrorPhase(){
    return (
        <h1>
            ERROR😪
        </h1>
    )
}