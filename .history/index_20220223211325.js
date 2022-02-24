let input=document.getElementById("num");
let btn=document.getElementById("btn");
let text=document.getElementById("show-text");
let restart=document.getElementById("restart");
let random = Math.floor(Math.random() * 6 + 1);

function result(){
 
return new Promise((resolve,reject)=>{
    if(isNaN(+input.value) || (+input.value > 6 )|| (+input.value < 1)){
        reject("it is error");
    }

else if(random === +input.value){
    resolve("2 points");
}
else if((random-1 === +input.value) || (random+1 === +input.value)){
    resolve("1 points");

   }else{
   resolve("0 points");
}

})

}
btn.addEventListener("click",()=>{
    result().then((answer)=>{
        return text.innerHTML = answer; 
      }).catch((err)=>{
          alert ("incorrect input");
      })
})
restart.addEventListener("click",()=>{
text
})