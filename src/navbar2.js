import odin from './odin.png';
const odinlogo = new Image();
odinlogo.src = odin;
odinlogo.style.width = "100px";
odinlogo.style.cursor = "pointer";
//odinlogo.addEventListener('click', menunavbar); // this one go to every menu page/link

var navbar = document.createElement('nav'); // this one create the navbar
navbar.style.width = "80%";                // and styles it 
navbar.style.height = "120px";
navbar.style.background = "gray";
navbar.style.color = "black";
navbar.style.display = "flex";
navbar.style.flexDirection = "row";
navbar.style.alignItems = "center";
navbar.style.justifyContent = "space-between";

var div1 = document.createElement('div'); //this one contain logo a name on the left side of navbar
div1.style.display = "flex";              // and styles it 
div1.style.flexDirection = "row";
div1.style.alignItems = "center";
div1.style.justifyContent = "center";
//div1.style.backgroundColor = "blue";

navbar.appendChild(div1); //add first div to navbar 

var divlogo = document.createElement('div'); // for logo
divlogo.appendChild(odinlogo);
div1.appendChild(divlogo);

var link = document.createElement('link'); //this one allow to add google font family, after the equal and using 
link.setAttribute('rel', 'stylesheet');    // the symbol '|' to separate them
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Tangerine|Courgette|Lato|Playfair+Display');
document.head.appendChild(link);

var divname = document.createElement('div'); // for name
divname.innerHTML = "Odin Todolist";
divname.style.fontFamily = 'Courgette, serif';
divname.style.fontSize = "3rem";
divname.style.cursor = "pointer";
//divname.addEventListener('click', menunavbar); // this one go to every menu page/link

div1.appendChild(divname);

// const listitem = ["Menu", "About it", "Contact"]; // create a menulist throwgh function

// let list = document.createElement('ul');
// //list.style.backgroundColor = "gray";
// list.style.margin = "0px";
// list.style.padding = "0px";
// listitem.forEach(myFunction);

// function myFunction(value) { //this function create the nav bar menu with a list
//   var newli = document.createElement('li');
//   newli.innerHTML = value;
//   newli.style.fontFamily = 'Courgette, serif';
//   newli.style.fontSize = "1.3rem";
//   newli.addEventListener('click', menunavbar); // this one go to every menu page/link
//   newli.style.cursor = "pointer";
//   newli.style.display = "inline-block";
//   newli.style.listStyle = "none";
//   newli.style.margin = "10px";
//   list.appendChild(newli);

//   if (window.matchMedia("(max-width: 600px)").matches) { // If media query matches
//     newli.style.marginRight = "0px";
//     newli.style.opacity = "0.5";
//     newli.style.fontSize = "1.1rem";
//     }
// }

// var div2 = document.createElement('div'); // this one contain menu elements as a list on the right side of navbar
// //div2.style.backgroundColor = 'pink';
// div2.style.marginRight = "20px";
// div2.style.display = "flex";              // and styles it 
// div2.style.flexDirection = "row";
// div2.style.alignItems = "center";
// div2.style.justifyContent = "center";

// div2.appendChild(list); // add list to the menu's div

// navbar.appendChild(div2); // add second div to navbar

// window.addEventListener("resize", resize); // resize function to get responsive 
// function resize() {
 if (window.matchMedia("(max-width: 600px)").matches) {
  console.log("resize event detected!");
  odinlogo.style.width = "80px";

  navbar.style.flexDirection = "column";
  navbar.style.justifyContent = "center";
  navbar.style.height = "auto";
  navbar.style.padding = "0px";
  
  divname.style.fontSize = "2rem";
  div1.style.marginLeft = "-10px";
  // div2.style.marginRight = "0px";
  // div2.style.width = "100%";
  // div1.style.width = "100%";
  //list.style.width = "200px";

// }
}

export default navbar; // everything must go inside navbar to be used by index.js
