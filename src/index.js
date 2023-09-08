import {show, tasklistdiv} from './show.js'; //dissplay task list
import {container} from './menus.js'; // container from menus which have genral and nee project
import navbar from './navbar2.js'; // navbar
import maincont from './maincontainer.js'; // main container for everything others parts
import {form, formcont} from './form.js'; // form and inputs dislayed after click button add task in show
import {formdisplay} from './formdisplay.js'; // allows read the Add Task's button
import {objectdisp, displaytasklist} from './newtask.js';
import {myfunctionmenu, myfunction1} from './menutask.js';
import footer from './footer.js';

[container, show].forEach((item) => maincont.appendChild(item));

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.flexDirection =  'column';

document.body.appendChild(navbar);
document.body.appendChild(maincont);
document.body.appendChild(footer);

if (localStorage.getItem("testJSON")) {
  //console.log('tasklist exists');
  displaytasklist()
 } else {
  console.log('tasklist do no exist');
 }

var aaa = 0;  // this two lines clean the tasklist showed; use 0 or 1
if (aaa == 1) {localStorage.clear(); }


// window.onerror = function() {
//   console.log('a error has occurred index');
//   //location.reload();
//   //one();
// }


//export {windowonload};