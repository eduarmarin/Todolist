import { one } from './index.js';
import {formdisplay} from './formdisplay.js'; // It allows to read the Add Task's button
import {show, tasklistdiv} from './show.js'; //dissplay task list
import { windowonload } from './index.js';

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

function objectdisp (){  //get data throw the accept button      //  datein, descripin, tittlein
  var clicked = this.innerHTML;
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
    //console.log('length tasklist array ' + tasklist.length);
    var myjson = JSON.stringify(tasklist); // the json file is created
    localStorage.setItem("testJSON", myjson);

    if (localStorage.getItem("testJSON")) {displaytasklist()}
  }
}

function displaytasklist(){

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
    divcont1.style.gap = '8px';
    

    for (let x in tasklist1[i]) {    
      //console.log('inside tasklist for');
      if (x == 'tittle'){
        var divconttittle = document.createElement('div'); 
        divconttittle.textContent = tasklist1[i][x];
      }
      if (x == 'description'){
        var divcontdescrip = document.createElement('div'); 
        divcontdescrip.textContent = tasklist1[i][x];
      }
      if (x == 'date'){
        var divcontdate = document.createElement('div'); 
        divcontdate.textContent = tasklist1[i][x];
      }
      if (x == 'important'){  
        var divcontimp = document.createElement('div'); 
        divcontimp.textContent = tasklist1[i][x];
      }
      var divmenu = document.createElement('div');
        divmenu.style.cursor = "pointer";
        //divmenu.textContent = "Menu";
        divmenu.style.position = 'relative';
        divmenu.style.display = 'inline-block';
        divmenu.classList.add('menu');
        divmenu.appendChild(image.cloneNode(true));
    }
    [divconttittle, divcontdescrip, divcontdate, divcontimp, divmenu].forEach((item) => divcont1.appendChild(item));
    tasklistdiv.appendChild(divcont1); 
  }
  //console.log('end of displaytasklist in newtask.js ')
  windowonload();
}


export {objectdisp, displaytasklist};