document.getElementById('diposit-btn').addEventListener('click',function(){
    const dipositText=document.getElementById('diposit-text')
    const newx= dipositText.value
    const newInput=parseFloat(newx)
    
    

     const p=document.getElementById('diposit-show')
     


    const previouseTotal=p.innerText;
    
    const newText=parseFloat(previouseTotal)
  
     const dipositNew =newText+newInput
       p.innerText=dipositNew
 
       const blanceTotal=document.getElementById('blance-total')    
       const previouseblanceTotal=blanceTotal.innerText;
       const newBlance=parseFloat(previouseblanceTotal);
       console.log(newBlance)
       const blance=newBlance+dipositNew

       blanceTotal.innerText=blance

    dipositText.value='';
    

})

// withdrow section 

document.getElementById('withdrow-btn').addEventListener('click',function(){
    const dipositText=document.getElementById('diposit-text2')
    const newx= dipositText.value
    const newInput=parseFloat(newx)
  
    
     const p=document.getElementById('withdorw-show')
    const previouseTotal=p.innerText;
    const newText=parseFloat(previouseTotal)
     const dipositNew =newText+newInput
       p.innerText=dipositNew
 
       const blanceTotal=document.getElementById('blance-total')    
       const previouseblanceTotal=blanceTotal.innerText;
       const newBlance=parseFloat(previouseblanceTotal);
       const blance=newBlance-dipositNew

       dipositText.value='';
   if(dipositNew>blance){
    alert('baper bank e tk nai')
    return;
   }

       blanceTotal.innerText=blance

   
    

})