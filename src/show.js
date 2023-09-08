import { form, formcont } from "./form";
import navbar from "./navbar2";
import { container } from "./menus";
import { formdisplay } from "./formdisplay";

var show = document.createElement('div'); //  this one display task list in a column on the right screen side 
  show.style.width = '50%';
  show.style.minHeight = '200px';
  show.style.backgroundColor = 'gray';
  show.style.display = 'flex';
  //show.style.justifyContent = 'center';
  show.style.alignItems = 'center';
  show.style.flexDirection =  'column';
  //show.textContent = 'Todo list';

var tasklistdiv = document.createElement('div'); // div for all new tasks
  tasklistdiv.style.minWidth = '100%';
  tasklistdiv.style.display = 'flex';
  tasklistdiv.style.justifyContent =  'center';
  tasklistdiv.style.alignItems = 'center';
  tasklistdiv.style.flexDirection = 'column';
  //tasklistdiv.style.margin = '4px';
  tasklistdiv.style.padding = '1%';
  tasklistdiv.style.gap = '2px';

var tasklisttittles = document.createElement('div'); // tittles div
  //tasklisttittles.style.minWidth = '100%';
  tasklisttittles.style.display = 'flex';
  tasklisttittles.style.justifyContent =  'center';
  tasklisttittles.style.alignItems = 'center';
  tasklisttittles.style.flexDirection = 'row';
  tasklisttittles.style.gap = '4px';
  tasklisttittles.style.paddingLeft = '1%';
  tasklisttittles.style.paddingRight = '1%';
  tasklisttittles.style.width = '95%';

    let divconttittle = document.createElement('div'); 
    divconttittle.textContent = 'Tittle';
    divconttittle.style.width = '20%';
    divconttittle.style.overflow = 'hidden';
    divconttittle.style.padding = '2px';
    divconttittle.style.fontFamily = 'Tangerine, serif';
    divconttittle.style.fontSize = '25px';

    let divcontdescrip = document.createElement('div'); 
    divcontdescrip.textContent = 'Description';
    divcontdescrip.style.width = '45%';
    divcontdescrip.style.overflow = 'hidden';
    divcontdescrip.style.padding = '2px';
    divcontdescrip.style.fontFamily = 'Tangerine, serif';
    divcontdescrip.style.fontSize = '25px';

    let divcontdate = document.createElement('div'); 
    divcontdate.textContent = 'Date';
    divcontdate.style.minWidth = '20%';
    divcontdate.style.overflow = 'hidden';
    //divcontdate.style.cssText = 'overflow:hidden';
    divcontdate.style.padding = '2px';
    divcontdate.style.fontFamily = 'Tangerine, serif';
    divcontdate.style.fontSize = '25px';

    let divcontimp = document.createElement('div'); 
    divcontimp.style.minWidth = '9%';
    //divcontimp.textContent = 'Star  ';

    let divmenu = document.createElement('div');
    divmenu.textContent = '...';
    divmenu.style.fontSize = '25px';
    divmenu.style.fontWeight = 'bold';
    divmenu.style.width = '5%';

[divcontimp, divconttittle, divcontdescrip, divcontdate, divmenu].forEach((item) => tasklisttittles.appendChild(item));

var addtask = document.createElement('button'); // add task button 
  addtask.textContent = 'Add Task';
  addtask.style.width = '80px';
  addtask.style.cursor = "pointer";
  addtask.style.margin = "4px";
  addtask.addEventListener('click', formdisplay); // this one lets form display it

//show.appendChild(addtask);
[tasklisttittles, tasklistdiv, addtask].forEach((item) => show.appendChild(item));

if (window.matchMedia("(max-width: 600px)").matches) {
  show.style.width = '100%';
  show.style.height = '300px';
  container.style.display = 'none';
  navbar.style.width = '100%';
  navbar.style.padding = '-10%';
  form.style.width = '90%';
  form.style.paddingLeft = '10px';
  form.style.marginLeft = '-27%';
}

export {show, tasklistdiv};