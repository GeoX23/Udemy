console.dir(document);

var myOutput = document.getElementById("output");

console.dir(myOutput);

document.getElementById("myButton").addEventListener("click",function(){
   myCar();
   console.log(myObj1);
})

document.getElementById("myButton1").addEventListener("click",function(){
   showMyCar();
   
})

var myObj1 = new Object();
function myCar(){
myObj1.Car = prompt("What brand is your car ?");
myObj1.Year = prompt("What year ?");
myObj1.Model = prompt("What model ?");
myObj1.Cost = prompt("How much did it cost ?");
}

function showMyCar(){
    alert("My car's brand is : " +myObj1.Car);
    alert("My car's year is : " +myObj1.Year);
    alert("My car's model is : " +myObj1.Model);
    alert("My car cost me  : " +myObj1.Cost);
} 



