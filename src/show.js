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
  tasklistdiv.style.minWidth = '90%';
  tasklistdiv.style.display = 'flex';
  tasklistdiv.style.justifyContent =  'center';
  tasklistdiv.style.alignItems = 'flex-start';
  tasklistdiv.style.flexDirection = 'column';
  //tasklistdiv.style.margin = '4px';
  tasklistdiv.style.padding = '4px';

var addtask = document.createElement('button'); // add task button 
  addtask.textContent = 'Add Task';
  addtask.style.width = '80px';
  addtask.style.cursor = "pointer";
  addtask.style.margin = "4px";
  addtask.addEventListener('click', formdisplay); // this one lets form display it

//show.appendChild(addtask);
[tasklistdiv, addtask].forEach((item) => show.appendChild(item));

if (window.matchMedia("(max-width: 600px)").matches) {
  show.style.width = '100%';
  show.style.height = '300px';
}

export {show, tasklistdiv};