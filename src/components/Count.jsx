import { useState,useEffect } from "react"


const Button =()=>{
    let [count,setcount]= useState(0);
 
let UpdateCount =()=>{
    count=count+1
        setcount(count)
        console.log(count)
}
useEffect(()=>{
    console.log(count)
})


return(
    <>
    {count}
    <button onClick={UpdateCount}>{count}</button>
    </>
)
}


export default Button