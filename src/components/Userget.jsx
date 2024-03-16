
import UseFetch from '../hooks/Usefetch'
const  Userget= () => {
    const useurl = UseFetch("https://jsonplaceholder.typicode.com/todos")
    const useusers = UseFetch("https://jsonplaceholder.typicode.com/photos")
    return (
        <>
        
          
           
             
            

           
          
      
          {useusers &&
            useusers.map((item) => {
              return(
              <>
               <p key={item.id}>{item.title}</p>;
              <img src={item.url} alt='fhfj'/>
              </>)
            })}
        </>
      );
    }; 
export default Userget;
