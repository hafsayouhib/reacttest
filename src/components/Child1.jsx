import React from 'react'

function Child (prop){

    return(
        <>
        <p>Recieved message:{prop.data}</p>
        </>
    )
    console.log(prop)


    
}
export default Child