import React from 'react'
import { useState } from 'react'
import { userContext } from '../App'
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";


function Main() {
   /* const [user,setUser]=useState("vasanth")

    function updates(){
        setUser((current)=>{
            current="ganesh";
            return current
        })
        console.log(user)
    }
  return (
   
    <div>
        <main>Content {user}</main>
        <button onClick={updates}>SUBMIT</button>
   <userContext.Consumer >
    {
      (user)=>{
      return  <h1>{user.name}</h1>
    }
    </userContext.Consumer>
    </div>
    
  )}*/


  let [item,setItem]=useState([
    {id:1,list:"html,css",checked:false},
    {id:2,list:"javascript",checked:false},
    {id:3,list:"react",checked:false},

  ])
  let [isupdate,setIsupdate]=useState(false)
  let [newin,setNewin]=useState("")
  let [isedit,setIsedit]=useState(null)

  let handleUpdate=(id)=>{
    
    setIsupdate(true)
    let newInput=item.find(items=>items.id===id)
    setNewin(newInput.list)
    setIsedit(id)
  }
  let handleCheck=(id)=>{
    let newCheck = item.map((items) =>
      items.id === id ? { ...items, checked: !items.checked } : items
    );
    
     setItem(newCheck)
  }

  let handleAdd=()=>
     {
      if(isupdate){
          let checkId=item.map((items)=>items.id===isedit ?  { ...items,list:newin}:items)
          setItem(checkId)
          setIsedit(null)
          setNewin(" ")
          setIsupdate(false)
      }
    else{
    setItem([...item, {id:item.length+1,list: newin,checked:false}]);
     setNewin("");
    }
     }

  let handleDelete=(id)=>{
    let updateItem=item.filter((items)=>id!==items.id).map((items,index)=>{ return(
      {...items,id:index+1}
    ) 
    })
    
    setItem(updateItem)
  }
 
  return (
     <main>
      <input type="text" value={newin} onChange={(e)=>{setNewin(e.target.value)}}/>
      <button onClick={()=>handleAdd(item.id)}>{isupdate?"Save":"Add"}</button>
       {item.map((items)=>{
        return (
          <ul key={items.id}>
            <input type="checkbox" checked={items.checked} onChange={()=>{
              handleCheck(items.id)
            }}/>
            <label>{items.list}</label>
            <CiEdit tabIndex={0}  rele="button" onClick={()=>handleUpdate(items.id)}/>
            <CiTrash tabIndex={0} role='button' onClick={()=>{handleDelete(items.id)}}/>

          </ul>
        )
       })}
     </main>
  )

}

export default Main