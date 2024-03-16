import React from 'react'
import Child from './Child1'


let Parent = ()=>{
    const message = "hi i am from parent";
    return(
        <>
        <Child data= {message}/>
        </>
    )
    console.log(message)
}
export default Parent