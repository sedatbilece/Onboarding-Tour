

function getPosition(targetItem,cardwith){
let list =[]

     
    if( (targetItem[0].offsetLeft+targetItem[0].offsetWidth+10+cardwith <window.innerWidth)  ){
         console.log("sağda")
        list.push(targetItem[0].offsetLeft+targetItem[0].offsetWidth+10)

        list.push(targetItem[0].offsetTop)
    }else{
        console.log("solunda")

        list.push(targetItem[0].offsetLeft-targetItem[0].offsetWidth-10 -cardwith)

         list.push(targetItem[0].offsetTop)

    }
    
    

return list;
}


export {getPosition};