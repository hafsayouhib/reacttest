import {useState} from 'react'
let UseFetch = ({id})=>{

    try{
            
        const[list,setList]= useState()
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

        .then(response => response.json())
      .then(json => setList(json))
      
      return(
        <div>
            {list && list.title}
        </div>
      )
      
      }
    
      catch(err){
        console.log(err)
      }
   

}
    


      

export {UseFetch}