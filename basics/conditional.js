let a = prompt("Hey whats your age?") //prompt is used to ask questions where as alert is used to say something
//console.log( typeof a); //always string
a=Number.parseInt(a)//converting string to number
// console.log( typeof a);
if(a<0){
    alert("This is an invalid age");
}
else if(a<9){

alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){

alert("You are a kid and you can think of driving after 18");
}

else{
    alert("You can now drive as you are above 18");
}
console.log("done")
 // switch case
let age=prompt("what is your age?")
age=Number.parseInt(age)
switch(age){
    case 12: 
    console.log("your age is 12")
    break;
    case 14:
        console.log("your age is 14")
        break;
        default:
            console.log("your age is not special")

}
 //ternary operators

 console.log("you can",(a<18?"not drive":"drive"));