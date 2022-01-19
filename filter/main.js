let list = document.querySelector(".filter-menu").children;
let itembox = document.querySelector(".filter-item").children;

for(let i= 0; i<list.length;i++){
    list[i].addEventListener("click",function(){
    for(let j = 0; j<list.length;j++){
        list[j].classList.remove("active");
    }

    this.classList.add("active");

    let dataFilter = this.getAttribute('data-filter');

    for(let k= 0; k<itembox.length;k++){
        itembox[k].classList.remove('active');
        itembox[k].classList.add('delete');


       if(itembox[k].getAttribute('data-item') == dataFilter ||
       dataFilter == "all"){
        itembox[k].classList.remove('delete');
        itembox[k].classList.add('active');

       }

    }
    })
}






















// let sortBtn = document.querySelector('.filter-menu').children;
// let sortItem = document.querySelector('.filter-item').children;

// for(let i = 0; i < sortBtn.length; i++){
//     sortBtn[i].addEventListener('click', function(){
//         for(let j = 0; j< sortBtn.length; j++){
//             sortBtn[j].classList.remove('current');
//         }

//         this.classList.add('current');
        

//         let targetData = this.getAttribute('data-filter');

//         for(let k = 0; k < sortItem.length; k++){
//             sortItem[k].classList.remove('active');
//             sortItem[k].classList.add('delete');

//             if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
//                 sortItem[k].classList.remove('delete');
//                 sortItem[k].classList.add('active');
//             }
//         }
//     });
// }




























