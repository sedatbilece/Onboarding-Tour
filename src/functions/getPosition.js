

function getPosition(targetItem,cardwith,cardheight) {
let list =[]
    
     //altında konumlandır !!!İYİLEŞTİRİLMELİ
     if(targetItem.offsetTop+ targetItem.offsetHeight < cardheight/2){

 
        list.push(targetItem.offsetLeft);
        list.push (targetItem.offsetTop+ targetItem.offsetHeight+10);
     }

     else{// sağ yada sol


        // sağında konumlandır
        if( (targetItem.offsetLeft+targetItem.offsetWidth+10+cardwith <window.innerWidth)  ){
            
           list.push(targetItem.offsetLeft+targetItem.offsetWidth+10)
   
           list.push(targetItem.offsetTop)

       }else{//solunda konumlandır
           
   
           list.push(targetItem.offsetLeft-targetItem.offsetWidth-10 -cardwith)
   
            list.push(targetItem.offsetTop)
       }

     }
       
return list;// left , top   
}


export {getPosition};