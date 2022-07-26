import { useEffect } from 'react';
import '../App.css';
import Card from './Card';



function Target({content}){
 

    useEffect( () => {
        console.log("target yüklendi")
       
       },[])

    

    useEffect( () => {
        console.log("target render")
       
       })
   
    return (<div>

        <Card content={content}  />

    </div>)
}


export default Target;

/*

{content.map((item,index)=>{
            return (<div>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                {item.target}

            </div>)
        })}

*/