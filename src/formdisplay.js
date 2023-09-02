// import show from './show.js';
// import container from './menus.js';
// import navbar from './navbar.js';
// import maincont from './maincontainer.js';
import {star, form, formcont} from './form.js';

function formdisplay (){ 
   var clicked = this.innerHTML;
   if (clicked == 'Add Task') {  
    //console.log('Add Taskpre');
    formcont.style.display = "block";
    formcont.style.position = "absolute";
    formcont.style.backdropFilter = "blur(2px)";

    form.style.position = "absolute";
    form.style.left = '30%';
    form.style.right = '30%';
    form.style.bottom = '30%';
    form.style.top = '30%';

    document.body.style.position = 'relative';
    document.body.appendChild(formcont);
    // maincont.style.position = 'relative'; // container must have relative position
    // maincont.appendChild(formcont);
   }
  //  if (clicked == 'Accept') {  // must save the inputs as a object array
  //   objectdisp();
  //   console.log('Add Task');
  //  }
  if (clicked == 'Cancel') {  
    var form1 = document.getElementById("myform");
    form1.reset();      // inputs are blanked
    formcont.style.display = "none";
    document.getElementById('addtask').textContent = 'Accept';
    //console.log('cancell');
  }
  if (clicked == '') {  //important or not  toggle colors red and orange
    var star1 = document.getElementById('star');
    if (star1.style.backgroundColor == 'gray') {
      star.style.backgroundColor = 'red';
    }else{star.style.backgroundColor = 'gray';}
    
    //console.log('Important'); 
  }
  return false;
}

export {formdisplay};