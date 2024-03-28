let h2=document.querySelector("h2");
// console.log(h2.innerText);
//append means add from last
h2.innerText=h2.innerText +"from college Student";


let divs=document.querySelectorAll(".box");
 let idx=1;
 for(div of divs){
    console.log(div.innerText);
    div.innerText=`new unique value ${idx}`;
    idx++;
 }
divs[0].innerText="new unique value 1"
divs[1].innerText="new unique value 2"
divs[2].innerText="new unique value 3"
// console.log(divs[0]);