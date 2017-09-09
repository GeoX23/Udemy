console.dir(document);

// Variables

var myEl = document.querySelectorAll(" li ");
var myOutput = document.getElementById("output");
var myBtn = document.getElementById("myBtn");
var myObj1 = new Object();
var myEle = document.createElement("h1");
var myContent = document.createTextNode("New Content");
var output1 = document.getElementById("output1");



myBtn.addEventListener("click", ChangeText);


//console Logs

console.log(myEl);
console.dir(myOutput);

document.getElementById("myButton").addEventListener("click", function () {
    myCar();
    console.log(myObj1);
})

document.getElementById("myButton1").addEventListener("click", function () {
    showMyCar();


})


// Conditional Statement
document.getElementById("updatebtn").onclick = function () {
    var myVal = document.getElementById("update").value;
    if (myVal == "red") {
        myVal = "Wow red is my fav color :D ";
    }
    else if (myVal == "blue") {
        myVal = "Wow its blue";
    }
    else (
        myVal = "Not red or blue ... such a pitty :( "
    )

    output1.innerHTML = myVal;
}


// loops

for (i = 0; i < myEl.length; i++) {
    myEl[i].addEventListener("click", myFun);
}

// functions

function myCar() {
    myObj1.Car = prompt("What brand is your car ?");
    myObj1.Year = prompt("What year ?");
    myObj1.Model = prompt("What model ?");
    myObj1.Cost = prompt("How much did it cost ?");
}

function showMyCar() {
    alert("My car's brand is: " + myObj1.Car + " | Year : " +myObj1.Year + " | Model : " +myObj1.Model + " | Cost : " +myObj1.Cost);
    
}


function ChangeText() {
    myOutput.innerHTML = "You really need a new car !! ";
    myOutput.style.backgroundColor = "black";
    myOutput.style.color = "red";
    myEle.appendChild(myContent);
    myOutput.appendChild(myEle);
}

function myFun() {
    this.style.backgroundColor = "pink";
}


// Lesson Ajax - JSON 43.

var jsonoutput = document.getElementById("jsonoutput");
var jsonbtn = document.getElementById("jsonupdate");

jsonbtn.onclick = function () {
    var a = new XMLHttpRequest();

    a.onreadystatechange = function () {
        if (this.readyState == 4) {
            var l = JSON.parse(this.responseText);

            for (o in l) {

                jsonoutput.innerHTML += l[o].id + " " + l[o].title + "<br>";

            }
        }
    }
    a.open("GET", "http://jsonplaceholder.typicode.com/posts?userId=1", true);
    a.send();



};








