const drop = document.querySelector(".one");
const btn = document.querySelector(".burger");

// btn.addEventListener('click', ()=> {
//     if (drop.style.display === "block"){

//         drop.style.display = "none";

//     } else {
//         drop.style.display = "block";
//     }
// })     


var nubmer = 1; 

btn.addEventListener('click', ()=> {
    if (nubmer == 1){
       drop.style.display = 'block';
       nubmer = 0;

    } else if ( nubmer == 0) {
        drop.style.display = 'none';
        nubmer = 1; 
    }
}) 