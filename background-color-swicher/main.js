const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log(buttons);


  buttons.forEach(function(button){
     button.addEventListener("click",function(){
        //  console.log(this.id);

         if(this.id=="red"){
             body.style.backgroundColor=this.id;
         }
         if(this.id=="blue"){
            body.style.backgroundColor=this.id;
        }
        if(this.id=="green"){
            body.style.backgroundColor=this.id;
        }
        if(this.id=="black"){
            body.style.backgroundColor=this.id;
        }
        if(this.id=="yellow"){
            body.style.backgroundColor=this.id;
        }
     })
})

