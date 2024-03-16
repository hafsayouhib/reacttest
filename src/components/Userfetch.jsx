import React, {useState, useEffect} from 'react';
let UserFetch = ()=>{
    let [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json))
    },[])
    return(
        <>
        {data && data.title}
        </>
    )
}
export default UserFetch