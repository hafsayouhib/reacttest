

let ImagesList = (prop)=>{
    return (
       <ul>
        {
            prop.lists.map((liss,id)=>
            {
                return(
                    <li key ={id}>
                        <h2>{liss.name}</h2>
                        <img src={liss.src} alt={liss.alt} />
                        <button onClick={()=>prop.handledeletion(liss.id)}>Delete</button>

                    </li>
                )
            })
        }
       </ul>
    )

}
export {ImagesList}