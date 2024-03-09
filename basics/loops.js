//for loop
for(let i=0;i<5;i++){
    console.log(i);
}
//for in loop

let obj={
    ram :90,
   sita:100,
   hari:70,
   shiva:80
}
for(let a in obj){
    console.log(a);//it will print key such as ram sita hari shiva
    console.log("Marks of"+a+"are"+obj[a]);//it will print key with value
}
//for of loop
for(let b of "ram"){// it should be in string or array =iterable data structure
  console.log(b)
}
//do while loop
let n =prompt("enter a number:")
n=  Number.parseInt(n)
let i=10// it will print 10 at least one time 
do{
    console.log(i)
    i++
}while(i<n)
//while loop
i=0;
while(i<n){
    console.log(i)
    i++
}