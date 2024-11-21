import React from 'react'
import { useState ,useEffect,useRef} from 'react';

const gg=()=>{
    return(
        <div>hello ji sastriyakal</div>
    )
}

export default function Hokks() {
    const [count,setCount]=useState(10);
    const [num,setNum]=useState(10);
    const [cal,setCal]=useState(1);
    let [pac,setpac]=useState(true);
    let a=useRef(0);
    let ref=useRef()
    useEffect( () => {
        alert("hello")
        ref.current.style.backgroundColor="red";
         },[])
         useEffect(()=>{
            a.current=a.current+1;
            alert("hello ji roshan")
         },[count])
         useEffect(()=>{
            alert("num is changed")
         },[num]);
         useEffect(()=>{
            setCal(()=>count*2)
            setpac(()=>pac=false)
         },[count,num])
  return (
    <div>
<h3>
    use state hook
</h3>
<h5>count is {count} and a is {a.current}</h5>
<h5>number is {num} and {(pac)?"hello":"byee"}</h5>
<h5>calculation:{cal}</h5>
<button ref={ref} onClick={()=>{setCount(count-1)}}>update count</button>
<button onClick={()=>setNum((c)=>c+10)}>change number</button>

    </div>
  )
}
