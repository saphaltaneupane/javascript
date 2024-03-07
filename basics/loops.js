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