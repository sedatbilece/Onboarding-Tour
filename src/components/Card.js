
import './Card.css';
import { useEffect ,useState } from 'react';
import {getPosition} from './getPosition';

function Card({content }) {
   let  cardwith=200;
    const [left , setLeft] = useState(0);
    const [top , setTop] = useState(0);
    useEffect( () => {
        console.log(" card yüklendi")
        let targetlist=   content.map( item => item.target)
   
        const  targetItem = document.getElementsByClassName(targetlist[0])// dönen listedeki classlar 
       
        console.log(targetItem)// targetItem[0] ile propertyleri alıyoruz

        let pos = getPosition(targetItem,cardwith);
       
         console.log(window.innerWidth)


        console.log("pos:",pos)
        setLeft(pos[0]);
        setTop(pos[1]);
       },[])


       useEffect( () => {
        console.log(" card render")
       })


    const style={
       
            position:'fixed',
            background: 'red',
            width: cardwith+'px',
            height: '10%',
            top:top+'px',
            left:left+'px',
            zIndex: '1'
            
          

    }


return (<div style={style}>
          
          <p>Card item</p>
          {left} - {top}
         
</div>)


}

export default Card;

/* contente erişiliyor
 {content.map((item,index)=><div key={index}>{item.target}</div> )    }
*/