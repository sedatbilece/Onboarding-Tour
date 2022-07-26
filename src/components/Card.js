
import '../styles/Card.css';
import { useEffect ,useState } from 'react';
import {getPosition} from '../functions/getPosition';

function Card({content ,func}) {
     
   let  cardwith=560;
   let cardheight=340;
   
    const [left , setLeft] = useState(0);
    const [top , setTop] = useState(0);
    const [num, setNum] = useState(0);
    const [x, setX] = useState(0);
    const buttext=["Next","Finish it"];

// SORUNLU OLABİLİR
    const myHandlerFunction = () => {

        setPosisition();
        }

    window.addEventListener('resize', myHandlerFunction);
// RESIZE RENDER


    function setPosisition(){

        let targetlist=   content.map( item => item.target);
        
        try{
            const  targetItem = document.getElementsByClassName(targetlist[num])// dönen listedeki classlar 
            console.log(targetItem)// targetItem[0] ile propertyleri alıyoruz


            let pos = getPosition(targetItem,cardwith,cardheight);
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

       useEffect(()=>{
        setPosisition();
        console.log("num:",num);

        if(num>=content.length-1){
            
            setX(1);
        }
    

        if(num>=content.length){
            
            console.log('component kaldırılmalıdır');
            func(1);// return visibility of card
        }
        
},[num]) 




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
            <h4>{content.map((item,index)=> index===num ?<div  key={index}>{item.title}</div> : null)}</h4>
            
        </div>
        {
            content.map((item,index)=> index===num ?<div  key={index}>{item.text}</div> : null)
                
        }
        </div>


          <div className='bottom'>
          {num!==content.length ?<span> {num+1}of {content.length}</span> :null} 
        
         <div>
         <a  className='notnow' onClick={()=>func(1)}>Not Now</a>
         <button className='btn' onClick={ ()=>setNum(num+1) } ><b>{buttext[x]}</b></button>
         </div>
          </div>

             
    </div>
    </div>)


}

export default Card;

/* contente erişiliyor
 {content.map((item,index)=><div key={index}>{item.target}</div> )    }
*/