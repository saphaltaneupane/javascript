var fruits = ["mango","apple","orange","guava"]; 
document.write(fruits);
var mobile=['samsung','iphone','huwaei','MI'];
var y;
document.write("<h1>For Of Loop Start</h1>");
for(y of mobile){
document.write("<h2 style='color:orange'>"+y+"<br>");
}
document.write("<h1>For In Loop Start</h1>");
for(var x in mobile){
document.write("<h2 style='color:orange'>"+x+"<br>");
}