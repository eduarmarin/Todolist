import { one } from './index.js';
import {formdisplay} from './formdisplay.js'; // It allows to read the Add Task's button
import {show, tasklistdiv} from './show.js'; //dissplay task list
import { windowonload } from './index.js';
import {myfunctionmenu} from './menutask.js';

import three from './three.svg';
const image = new Image();
image.src = three;
image.style.width = "20px"

//let text = localStorage.getItem("testJSON");
//let tasklist = JSON.parse(text); 
    
function prototask (tittle, description, date, important){
    this.tittle = tittle;
    this.description = description;
    this.date = date;
    this.important = important;
}

function objectdisp (){  //get data throw the ----Accept---- button      //  datein, descripin, tittlein
  var clicked = this.innerHTML;
  //alert('accept add task');
    //if (clicked == 'Modify') { return;}
  if (localStorage.getItem("testJSON")) {
    console.log('tasklist json file exists inside');
  } else {                                // this else: the json file is created if it doesnt exist 
    let tasklist = [];
    var myjson = JSON.stringify(tasklist);
    localStorage.setItem("testJSON", myjson);
  }
  
  let tittle = document.getElementById('tittlein').value;
  let description = document.getElementById('descripin').value;
  let date = document.getElementById('datein').value;
  let importcolor = document.getElementById("star").style.backgroundColor;
    if (importcolor == 'red'){importcolor = true;}else{importcolor = false;}

  if(tittle == '' || description == '' || date == ''){ // form validation
    alert("Some datas are missed!");
    objectdisp;
  }else{
    let text = localStorage.getItem("testJSON"); // initialize tasklist to add a new task
    let tasklist = JSON.parse(text); 

    const newtask = new prototask(tittle, description, date, importcolor); 
    tasklist.push(newtask); // must be update when delete/modify tasks
    var myjson = JSON.stringify(tasklist); // the json file is created
    localStorage.setItem("testJSON", myjson);

    if (localStorage.getItem("testJSON")) {displaytasklist()}
  }
}

function displaytasklist(){
  console.log('displaytasklist--');

  let text1 = localStorage.getItem("testJSON"); // the json file is readed
  let tasklist1 = JSON.parse(text1);
  
  while (tasklistdiv.lastChild) { //this one remove the div where is going to be the rows
    tasklistdiv.removeChild(tasklistdiv.lastChild);
    //console.log('eraser');
  }

  for (let i = 0; i < tasklist1.length; i++) {
    var divcont1 = document.createElement('div'); //it's created to countain every new row
    divcont1.style.display = 'flex';
    divcont1.style.justifyContent =  'center';
    divcont1.style.alignItems = 'center';
    divcont1.style.flexDirection = 'row';
    divcont1.style.border = 'solid';
    divcont1.style.borderColor = 'lightgray';
    divcont1.style.borderWidth = '1px';
    divcont1.style.gap = '4px';
    divcont1.style.paddingLeft = '1%';
    divcont1.style.paddingRight = '1%';
    divcont1.style.width = '95%';
    
    for (let x in tasklist1[i]) {    
      //console.log('inside tasklist for');
      if (x == 'tittle'){
        var divconttittle = document.createElement('div'); 
        divconttittle.textContent = tasklist1[i][x];
        divconttittle.style.width = '20%';
        divconttittle.style.overflow = 'hidden';
        divconttittle.style.padding = '2px';
        divconttittle.classList.add('divconttittle');
        if (window.matchMedia("(max-width: 600px)").matches) {divconttittle.style.fontSize = '15px';}
      }
      if (x == 'description'){
        var divcontdescrip = document.createElement('div'); 
        divcontdescrip.textContent = tasklist1[i][x];
        divcontdescrip.style.width = '45%';
        divcontdescrip.style.overflow = 'hidden';
        divcontdescrip.style.padding = '2px';
        divcontdescrip.classList.add('divcontdescrip');
        if (window.matchMedia("(max-width: 600px)").matches) {divcontdescrip.style.fontSize = '15px';}
      }
      if (x == 'date'){
        var divcontdate = document.createElement('div'); 
        divcontdate.textContent = tasklist1[i][x];
        divcontdate.style.minWidth = '20%';
        divcontdate.style.overflow = 'hidden';
        //divcontdate.style.cssText = 'overflow:hidden';
        divcontdate.style.padding = '2px';
        //divcontdate.style.backgroundColor = 'blue';
        divcontdate.classList.add('divcontdate');
        if (window.matchMedia("(max-width: 600px)").matches) {divcontdate.style.fontSize = '12px';}
      }
      if (x == 'important'){  
        var divcontimp = document.createElement('div'); 
        divcontimp.style.width = '10%';
        divcontimp.style.height = '15px';
        divcontimp.style.border = 'solid';
        divcontimp.style.borderWidth = '1px';
        divcontimp.style.borderRadius = '4px';
        divcontimp.style.borderColor = 'white';
        divcontimp.classList.add('divcontimp');
        //if (window.matchMedia("(max-width: 600px)").matches) { mediafunction}
        if (tasklist1[i][x] == true) { divcontimp.style.backgroundColor = 'green';
          }else{divcontimp.style.backgroundColor = 'gray';}
      }
      var divmenu = document.createElement('div');
        divmenu.style.cursor = "pointer";
        //divmenu.textContent = "Menu";
        divmenu.style.position = 'relative';
        divmenu.style.display = 'flex';
        divmenu.classList.add('menu');
        divmenu.appendChild(image.cloneNode(true));
        //divmenu.style.backgroundColor = 'red';
        divmenu.style.width = '5%';
        //if (window.matchMedia("(max-width: 600px)").matches) { mediafunction}
    }
    [divcontimp, divconttittle, divcontdescrip, divcontdate, divmenu].forEach((item) => divcont1.appendChild(item));
    tasklistdiv.appendChild(divcont1); 
  }
  //console.log('end of displaytasklist in newtask.js ')
  //windowonload();
  //return;

  var menlist1 = document.getElementsByClassName('menu'); // get the divs menu html list

  for (let i = 0, len = menlist1.length; i < len; i++){ // this for loop gets the index of the menu div clicked into newarr
  (function (index){
    menlist1[i].onclick = function(){
        console.log('index out ' + index);
        myfunctionmenu(index, menlist1); // after load all dom elements get onclick and go to the function to add the menu options
        //event.stopPropagation(); // this one avoid bubbling event
      //return
    }    
  })(i);
  }
}

// window.onload = mediafunction;

// function mediafunction() {
//     var tittle1 = getElementsByClassName('divconttittle');
//     var description1 = getElementsByClassName('divcontdescrip');
//     var date1 = getElementsByClassName('divcontdate');

//   if (window.matchMedia("(max-width: 600px)").matches) {

//     [tittle1, description1, date1].forEach(mediafun);;
//     function mediafun(item){item.style.fontSize = '25px';}
//     //document.getElementsByClassName('divcontdescrip').style.fontSize = 'small';
//     //document.getElementsByClassName('divcontdate').style.fontSize = '15px';
//     //document.getElementsByClassName('divcontimp').style.fontSize = 'small';
//   }
// }

export {objectdisp, displaytasklist};