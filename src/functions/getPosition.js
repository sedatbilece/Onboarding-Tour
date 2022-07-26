

function getPosition(targetItem,cardwith,cardheight) {
let list =[]
    
     //altında konumlandır !!!İYİLEŞTİRİLMELİ
     if(targetItem[0].offsetTop+ targetItem[0].offsetHeight < cardheight/2){

 
        list.push(targetItem[0].offsetLeft);
        list.push (targetItem[0].offsetTop+ targetItem[0].offsetHeight+10);
     }

     else{// sağ yada sol


        // sağında konumlandır
        if( (targetItem[0].offsetLeft+targetItem[0].offsetWidth+10+cardwith <window.innerWidth)  ){
            
           list.push(targetItem[0].offsetLeft+targetItem[0].offsetWidth+10)
   
           list.push(targetItem[0].offsetTop)

       }else{//solunda konumlandır
           
   
           list.push(targetItem[0].offsetLeft-targetItem[0].offsetWidth-10 -cardwith)
   
            list.push(targetItem[0].offsetTop)
       }

     }
       
return list;// left , top   
}


export {getPosition};