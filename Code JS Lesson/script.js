console.dir(document);

// Variables

var myEl = document.querySelectorAll (" li ");
var myOutput = document.getElementById("output");
var myBtn = document.getElementById("myBtn");
var myObj1 = new Object();
var myEle = document.createElement("h1");
var myContent = document.createTextNode("New Content");

myBtn.addEventListener("click",ChangeText);


//console Logs

console.log(myEl);
console.dir(myOutput);

document.getElementById("myButton").addEventListener("click",function(){
   myCar();
   console.log(myObj1);
})

document.getElementById("myButton1").addEventListener("click",function(){
   showMyCar();
   
   
})

// loops

for (i=0;i<myEl.length;i++){
    myEl[i].addEventListener("click",myFun);
}

// functions

function myCar(){
myObj1.Car = prompt("What brand is your car ?");
myObj1.Year = prompt("What year ?");
myObj1.Model = prompt("What model ?");
myObj1.Cost = prompt("How much did it cost ?");
}

function showMyCar(){
    alert("My car's brand is: " +myObj1.Car);
    alert("My car's year is : " +myObj1.Year);
    alert("My car's model is : " +myObj1.Model);
    alert("My car cost me  : " +myObj1.Cost);
} 


function ChangeText(){
    myOutput.innerHTML = "You really need a new car !! ";
    myOutput.style.backgroundColor = "black";
    myOutput.style.color = "red"; 
    myEle.appendChild(myContent);
    myOutput.appendChild(myEle);
}

function myFun(){
    this.style.backgroundColor = "pink";
}









