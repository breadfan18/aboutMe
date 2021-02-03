// Reading information from DOM elements
// 1) Console.log the text of the element with the id of "title"
const myTitle = document.querySelector("#title");
console.log(myTitle.innerHTML);

// 2) Console.log the class of the first span on the page
const mySpan = document.querySelector(".blue");
const spanClass = mySpan.getAttribute("class");
console.log(spanClass);

// Updating properties of DOM elements
// 1) Turn the text blue in the first element with the "blue" class
mySpan.style.color = "blue";

// 2) Change the text of the "#title" element to a greeting of your choice
myTitle.innerHTML = "Welcome to the NEW WORLD";

// Creating new DOM elements
// 1) Create an h4 element with the text of "Powered by Javascript"
// 1b) Add that element to the end of the page
// 2) Create a ul with class "todos" and add it to the end of the page
const newh4 = document.createElement("h4");
newh4.innerText = "Powered by Javascript";
document.body.appendChild(newh4);
const newUl = document.createElement("ul");
newUl.setAttribute("class", "todos");
document.body.appendChild(newUl);



// 2b) Looping through this array, add the strings as <li> elements
const toDoList = ["create elements", "update them", "add them to DOM"];

for (let i = 0; i < toDoList.length; i++) {
    let currentLi = document.createElement("li");
    currentLi.innerHTML = toDoList[i];
    newUl.appendChild(currentLi);
}


// Removing elements from the DOM
// 1) Remove the #title h1 from the page
// 2) Using a while loop, remove each child of the ul until it is empty
myTitle.remove();
let children = document.querySelectorAll(".todos li");

let counter = 0;
while (newUl.hasChildNodes()) {
    console.log(children[counter]);
    children[counter].remove();
    counter++;
}

