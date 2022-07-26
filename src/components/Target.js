
import '../styles/App.css';
import Card from './Card';
import { useState } from 'react';


function Target({content}){
 
    
    //child da fonksiyona verilen veriyi burada alıyoruz.
  const [vis, setVis] = useState(0);
  const pull_data = (data) => {

    setVis(data);
  }
   
    return (<div>

        
        {console.log("app com render edildi")}
        {console.log("vis:",vis) }

        {!vis && <Card content={content} func={pull_data} />}
    </div>)
}


export default Target;

