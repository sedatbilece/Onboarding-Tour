
import '../styles/Card.css';
import { useEffect ,useState } from 'react';
import {getPosition} from '../functions/getPosition';

function Card({content ,step,setStep}) {
     
   let  cardwith=560;
   let cardheight=340;
   
    const [left , setLeft] = useState(0);
    const [top , setTop] = useState(0);

 // SORUNLU OLABİLİR
 const myHandlerFunction = () => {

    setPosisition();
    }

window.addEventListener('resize', myHandlerFunction);
// RESIZE RENDER

    
  function setPosisition(){
        
        
        
        try{
            
            const  targetItem = document.getElementsByClassName(content.target)// dönen listedeki classlar 
            console.log(targetItem)// targetItem[0] ile propertyleri alıyoruz
           
            let pos = getPosition(targetItem[0],cardwith,cardheight);
            setLeft(pos[0]);
            setTop(pos[1]);
            
            console.log("pos:",pos)
        }catch(e){
            console.log("error:",e)
        }
         console.log(window.innerWidth)

    }
   

    useEffect( () => {
        
        setPosisition();

       },[])



    const style={
       
            position:'fixed',
            top:top+'px',
            left:left+'px',
            zIndex: '1'
    }
    





    return (<div style={style}>
        <div className="Card">
  
  <div className='Pic'>Picture</div>
        

        <div className='CardText'>

        <div className='title'>
            <h4>{content.title}</h4>
            
        </div>
        {content.text} 
        </div>


          <div className='bottom'>
         
        
         
         
         <button className='btn' onClick={ ()=>setStep(step+1) } ><b>Next</b></button>
         
          </div>

             
    </div>
    </div>)


}
export default Card;


