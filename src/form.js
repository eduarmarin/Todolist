import {formdisplay} from './formdisplay.js'; // allows read the Add Task and cancel's button
import {objectdisp} from './newtask.js'; // goes to newtask after click on accept button
import {myfunction1} from './menutask.js';

var formcont = document.createElement('div'); // it'll contain form but with blur filter
  formcont.style.display = 'flex';
  formcont.style.justifyContent =  'center';
  formcont.style.alignItems = 'center';
  formcont.style.width = '100%';
  formcont.style.height = '100%';

var form= document.createElement('form'); // it gets inputs for new projects, it appears with click on the 'add task' button...later
  form.id = 'myform';
  form.style.paddingLeft = '10px';
  form.style.width = '40%';
  form.style.height = '200px';
  form.style.borderWidth = '1px';
  form.style.borderColor = 'gray';
  form.style.backgroundColor = 'pink';
  formcont.appendChild(form);

var tittled = document.createElement('div'); // it'll be inside form 
var tittlel = document.createElement('label');
  tittlel.style.marginBottom = '3px';
  tittlel.textContent = 'Tittle';
var tittlei = document.createElement('input');
  tittlei.id = 'tittlein';
  tittlei.setAttribute("required", "");
[tittlel, tittlei].forEach((item) => tittled.appendChild(item));
  
var descripd = document.createElement('div'); //it'll be nside form
var descripl = document.createElement('label');
  descripl.style.marginBottom = '3px';
  descripl.textContent = 'Description';
var descripi = document.createElement('textarea');
  descripi.id = 'descripin';
  descripi.setAttribute("required", "");
  
[descripl, descripi].forEach((item) => descripd.appendChild(item));

var dated = document.createElement('div'); //it'll inside form   datein, descripin, tittlein
var datel = document.createElement('label');
  datel.style.marginBottom = '3px';
  datel.textContent = 'Date';
var datei = document.createElement('input');
  datei.id = 'datein';
  datei.setAttribute('type', 'date');
  datei.setAttribute("required", "");
[datel, datei].forEach((item) => dated.appendChild(item));

var options = document.createElement('div'); //it'll contain import, another div to 'add task' and 'cancel' buttons
  options.style.width = '90%';
  options.style.display = 'flex';
  options.style.justifyContent =  'space-between';
  options.style.alignItems = 'center';
  options.style.flexDirection = 'row';

var star = document.createElement('div'); // import
  star.id = 'star';
  star.style.width = '15px';
  star.style.height = '15px';
  star.style.borderWidth = '2px';
  star.style.borderColor = 'gray';
  star.style.backgroundColor = 'gray';
  star.style.cursor = "pointer";
  star.addEventListener('click', formdisplay); // this one lets no form display it

var addcancel = document.createElement('div');// contain 'add task' and 'cancel' buttons
  addcancel.style.width = 'auto';
  addcancel.style.gap = '2px';
  addcancel.style.display = 'flex';
  addcancel.style.justifyContent =  'flex-end';
  addcancel.style.alignItems = 'center';
  addcancel.style.flexDirection = 'row';

var addtask = document.createElement('button'); // add task button this one display
  addtask.setAttribute("type", "submit"); // changed to button to see the display of the array, change too submit------------
  addtask.textContent = 'Accept';
  addtask.style.width = '80px';
  addtask.style.cursor = "pointer";
  addtask.id = 'addtask';
  addtask.addEventListener('click', objectdisp); // this one lets get inputs form to new object or array

var modifyok = document.createElement('button'); // modify function
  modifyok.style.display = "none";
  modifyok.textContent = 'Accept2';
  modifyok.style.width = '80px';
  modifyok.style.cursor = "pointer";
  modifyok.id = 'modifyok';
  modifyok.addEventListener('click', myfunction1); // modify function

var cancel = document.createElement('button'); // and cancel button
  cancel.textContent = 'Cancel';
  cancel.style.width = '70px';
  cancel.style.cursor = "pointer";
  cancel.addEventListener('click', formdisplay); // this one lets no form display it

[addtask, modifyok, cancel].forEach((item) => addcancel.appendChild(item));
[star, addcancel].forEach((item) => options.appendChild(item));
[tittled, descripd, dated, options].forEach((item) => form.appendChild(item));

[tittlei, tittled, descripi, descripd, dated].forEach(centerdiv);
[tittlei, descripi, dated].forEach(widborder);

function centerdiv(item){
    item.style.display = 'flex';
    item.style.justifyContent =  'center';
    item.style.alignItems = 'flex-start';
    item.style.flexDirection = 'column';
  }
function widborder(item){
    item.style.width = '200px';
    item.style.borderWidth = '1px';
    item.style.borderColor = 'gray';
    item.style.marginBottom = '10px';
  }

// window.onerror = function() {
//     //location.reload();
//     console.log('a error has occurred form.js');
//   }
  
export {star, form, formcont, addtask};