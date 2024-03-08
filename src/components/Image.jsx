let Image = (prop)=>{
    return(
        <img src={prop.src} alt={prop.alt} onClick={()=>prop.click(prop.alt)}/>

    )
}
export default Image