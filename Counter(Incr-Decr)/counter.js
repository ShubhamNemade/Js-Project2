let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let countervalue = document.querySelector("#countervalue");

let counter = 0;
increment.addEventListener("click",function(){
    counter++;
    countervalue.innerText = counter;
});

decrement.addEventListener("click",function(){
    counter--;
    countervalue.innerText = counter;
});





