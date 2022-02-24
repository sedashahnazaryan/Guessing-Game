let input=document.getElementById("num");
let btn=document.getElementById("btn");
let text=document.getElementById("show-text");
 
function result(){
 let random = Math.floor(Math.random() * 6 + 1);
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
result().then((answer)=>{
  return text.innerHTML = a 
})