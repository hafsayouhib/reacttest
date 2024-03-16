import React, { useState } from 'react';

const  UseFetch= (url)=> {
  
  const [list, setList] = useState();

  fetch(url)
  .then(response => response.json())
    .then(json => setList(json))
    .catch(err => console.log(err));
  

  return list;
  }

export default UseFetch
