let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let score1 = document.querySelector(".score1")
let score2 = document.querySelector(".score2")
let random1 = document.querySelector(".random1");
let random2 = document.querySelector(".random2")

btn1.addEventListener("click",function (){
    let res = Math.floor(Math.random() * 10)
    random1.textContent = res;
    score1.textContent = +score1.textContent + res;

})
btn2.addEventListener("click",function (){
    let res = Math.floor(Math.random() * 10)
    random2.textContent = res;
    score2.textContent = +score1.textContent + res;

})