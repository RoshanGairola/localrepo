 import React from 'react'
 import { useMemo } from 'react'
 
 const arr=new Array(30_00_000).fill(0).map((_,i)=>{
    return {
        index: i,
        ismagical:i===29000000

 }
 })
  function App(){
   const magical=useMemo(()=>arr.find(item=>item.ismagical==true),[])
    
        return(
           <h3>hello {magical.index}ji ki haal hain paji</h3>
        )
    
 }
 export default App;
 
 
