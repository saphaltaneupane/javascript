//why to use functions?
let a=1;
let b =2;
let c =3;
console.log("Average of a and b is" +(a+b)/2)
console.log("Average of b and c is" +(b+c)/2)
console.log("Average of a and c is" +(a+c)/2)
//to avoid this function is used
function avg(x,y){
    // return (x+y)/2;
    return Math.round((x+y)/2);
    //since the output contains decimal numbers too so to avoid that (1.5)
}
console.log(avg(a,b))

//Arrow Function -The concept of arrow function is important 
// Arrow Function without parameters
const hello=()=>{
    console.log("hello from the arrow function")
}
hello();

//Arrow Functions with Parameters
const sum=(p,q)=>{
    return p+q;
}
console.log("SUM OF THE NUMBERS IS:"+sum(3,2))
// More examples in the arrow function
const hello2=()=>{
    return "hi"
}
let v=hello2()
console.log(v)
 
const sum2=(a,b)=>{
    let c = a+b;
    return c;
}
let y=sum2(1,3)
console.log(y)

