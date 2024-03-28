// document.write("hello");
// console.log(window);//window object
// alert("ello")
// console.dir(document)//special methods properties prints, to print object
// console.dir(document.body)
//for dynamic changes we use dom 
//Dom manipulation
// let heading=document.getElementById("heading");
// console.log(heading);
//  let headings=document.getElementsByClassName("heading");
// console.log(headings);
// let tags=document.getElementsByTagName("p");
// console.dir(tags);
//more advamce is query selector here we can  pass id/class/tag
let element=document.querySelector("p")//first element
console.log(element);
let elementsAll=document.querySelectorAll("p")//first element
console.log(elementsAll);
let elementsclass=document.querySelectorAll(".heading")//first element
console.log(elementsclass);
//id #
console.log(element.tagName); //its a paragraph 

