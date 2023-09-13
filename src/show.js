import { form, formcont } from "./form";
import navbar from "./navbar2";
import footer from "./footer";
import { container } from "./menus";
import { formdisplay } from "./formdisplay";
import maincont from "./maincontainer";

import star1 from './star.svg';
const image = new Image();
image.src = star1;
image.style.width = "15px";

var show = document.createElement('div'); //  this one display task list in a column on the right screen side 
  show.style.width = '70%';
  show.style.minHeight = '260px';
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
  tasklisttittles.style.gap = '2%';
  tasklisttittles.style.paddingLeft = '1%';
  tasklisttittles.style.paddingRight = '1%';
  tasklisttittles.style.width = '95%';
  //tasklisttittles.style.backgroundColor = 'red';

    let divconttittle = document.createElement('div'); 
    divconttittle.textContent = 'Tittle';
    divconttittle.style.width = '20%';
    divconttittle.style.overflow = 'hidden';
    divconttittle.style.padding = '2px';
    divconttittle.style.fontFamily = 'Courgette, serif';
    divconttittle.style.fontSize = '15px';
    //divconttittle.style.fontWeight = 'bold';

    let divcontdescrip = document.createElement('div'); 
    divcontdescrip.textContent = 'Description';
    divcontdescrip.style.width = '45%';
    divcontdescrip.style.overflow = 'hidden';
    divcontdescrip.style.padding = '2px';
    divcontdescrip.style.fontFamily = 'Courgette, serif';
    divcontdescrip.style.fontSize = '15px';
    //divcontdescrip.style.fontWeight = 'bold';

    let divcontdate = document.createElement('div'); 
    divcontdate.textContent = 'Date';
    divcontdate.style.minWidth = '20%';
    divcontdate.style.overflow = 'hidden';
    //divcontdate.style.cssText = 'overflow:hidden';
    divcontdate.style.paddingLeft = '2px';
    divcontdate.style.fontFamily = 'Courgette, serif';
    divcontdate.style.fontSize = '15px';
    //divcontdate.style.fontWeight = 'bold';

    let divcontimp = document.createElement('div'); 
    divcontimp.style.width = '10%';
    let star = document.createElement('div'); 
    star.style.display = 'flex';
    star.style.justifyContent =  'center';
    star.style.alignItems = 'center';
    star.appendChild(image);
    divcontimp.appendChild(star);

    let divmenu = document.createElement('div');
    divmenu.textContent = '...';
    divmenu.style.fontSize = '30px';
    divmenu.style.paddingLeft = '-4px';
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
  footer.style.width = '100%';
  maincont.style.width = '100%';
}

export {show, tasklistdiv};