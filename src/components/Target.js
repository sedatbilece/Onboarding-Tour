
import '../styles/App.css';
import Card from './Card';
import Trigger from './Trigger';
import Welcome from './Welcome';
import { useEffect, useState } from 'react';


function Target({content}){
 

useEffect( () => {
  console.log("target render")
})


    const [step, setStep] = useState(0);
    const [show, setShow] = useState(0);
  
    return (<div>

         {show===0?<Welcome setShow={setShow} setStep={setStep}/>:null}

        {content.map( (item,index) => {
          if(index===step && show===1){
            if(item.type==='card'){
              return (<Card key={index} content={item} setStep={setStep} step={step}/>)
            }
            else{
              return (<Trigger key={index} content={item} setStep={setStep} step={step}/>)
            }
            
          }
          else{
            return '';
          }
        })}
       
    </div>)
}


export default Target;

