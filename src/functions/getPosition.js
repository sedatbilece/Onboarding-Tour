

function getPosition(targetItem,cardwith,cardheight) {
let list =[]
    
     if(targetItem[0].offsetTop+ targetItem[0].offsetHeight < cardheight/2){//alta konumlandır
 
        list.push(targetItem[0].offsetLeft);
        list.push (targetItem[0].offsetTop+ targetItem[0].offsetHeight+10);
     }
     else{// sol yada sağ

        if( (targetItem[0].offsetLeft+targetItem[0].offsetWidth+10+cardwith <window.innerWidth)  ){
            console.log("sağda")
           list.push(targetItem[0].offsetLeft+targetItem[0].offsetWidth+10)
   
           list.push(targetItem[0].offsetTop)
       }else{
           console.log("solunda")
   
           list.push(targetItem[0].offsetLeft-targetItem[0].offsetWidth-10 -cardwith)
   
            list.push(targetItem[0].offsetTop)
       }

     }
       
return list;// left , top   
}


export {getPosition};