import {show, tasklistdiv} from './show.js'; //dissplay task list
import {objectdisp, displaytasklist} from './newtask.js';
import {addtask, form, formcont} from './form.js';

var menucont = document.createElement('div'); // this one will be showed after click on Menu button
menucont.classList.add('content');
menucont.id = 'menucont';
menucont.style.display = 'none';
menucont.style.position = 'absolute';
menucont.style.overflow = 'auto';
menucont.style.minWidth = '60px';
menucont.style.color = 'white';
menucont.style.fontWeight = 'bold';
menucont.style.textAlign = 'center';
//menucont.style.backgroundColor = 'pink';
//menucont.style.opacity = '0.5';
menucont.style.backdropFilter = "blur(1px)";
//menucont.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2);';
menucont.style.zIndex = '1';

var content1 = document.createElement('div');
content1.textContent = 'Delete';
content1.classList.add('del');
content1.addEventListener('click', myfunction1);

var content2 = document.createElement('div');
content2.textContent = 'Modify';
content2.classList.add('mod');
content2.addEventListener('click', myfunction1);

[content1, content2].forEach((item) => menucont.appendChild(item));

var newindex;

function myfunctionmenu(index, menlist1) {
  
  newindex = index;
  //console.log('index inside ' + index);
  menlist1[index].appendChild(menucont); // to the menu div clicked add del and mod

  if (document.getElementById('menucont').style.display === 'none'){ // and here toggle the menu div content with options about that task list
    document.getElementById("menucont").style.display = 'block';
    //console.log('inside list menu');
  }else {document.getElementById("menucont").style.display = 'none';}
  return (newindex);
}

function myfunction1 (event){ // delete and modify options function inside each task menu
  
  document.getElementById("menucont").style.display = 'none'; // this one turn menucont to none display; kind of restart

  let text1 = localStorage.getItem("testJSON");
  let tasklist1 = JSON.parse(text1);

  var clicked = this.innerHTML;

    if (clicked == 'Delete') { 
      tasklist1.splice(newindex, 1);
      //tasklist.splice(newindex, 1);
      console.log('tasklist after delete ' + tasklist1); 
      event.stopPropagation(); // this one avoid bubbling event
    }
    if (clicked == 'Modify') { // place every data is its place to be changed

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

        for (let x in tasklist1[newindex]) { 
          if (x == 'tittle'){document.getElementById('tittlein').value = [tasklist1[newindex][x]];}
          if (x == 'description'){document.getElementById('descripin').value = [tasklist1[newindex][x]];}
          if (x == 'date'){document.getElementById('datein').value = [tasklist1[newindex][x]];}
        }
        
        addtask.style.display = "none";  // toggle accept buttons
        modifyok.style.display = "block"; // toggle accept buttons
        //sevent.stopPropagation(); // this one avoid bubbling event
    }
    if (clicked == 'Accept') { // this accept is after modify option

      for (let x in tasklist1[newindex]) { 
        if (x == 'tittle'){tasklist1[newindex][x] = document.getElementById('tittlein').value;}
        if (x == 'description'){tasklist1[newindex][x] = document.getElementById('descripin').value;}
        if (x == 'date'){tasklist1[newindex][x] = document.getElementById('datein').value;}
      }

      // console.log('modify tittle: ' + tittle);
      //var form1 = document.getElementById("myform");
      //form1.reset();      // inputs are blanked
      formcont.style.display = "none";
    }

  var myjson = JSON.stringify(tasklist1);
  localStorage.setItem("testJSON", myjson);
  //console.log('testJSON ' + myjson);
  
  //window.location.reload(true);
  displaytasklist();
  //event.stopPropagation(); // this one avoid bubbling event
}

export{myfunctionmenu, myfunction1};