
import './App.css';

import nature from'./components/image/nature.jpg'


import {useState} from 'react'
import {ImagesList} from './components/Image'
import {UseFetch} from './components/Userfetch'










function App() {
  let imageList =[{
    "id":1,
    "title":'nature',
    'name':'Image',
    "src":nature,
    "alt":'nature'
  }]
    const [list, setList]= useState(imageList);
    let deletion =(id)=>{
      let newlist =imageList.filter((li)=> li.id !== id)
      setList(newlist)

     

    }

  
    
  

 
  
 
  return(
    <>
    <UseFetch id ={2}/>
    {/* <ImagesList lists={list} handledeletion={deletion} /> */}
    
    

    </>
  )
  
 }


export default App;
