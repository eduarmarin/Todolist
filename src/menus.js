import maincont from "./maincontainer";

var container = document.createElement('div'); // this one contain general and projects in a column on the left side
  container.style.width = '30%';
  //container.style.backgroundColor = 'pink';

var general = document.createElement('div'); // goes in container
  general.textContent = 'General';
  general.style.width = '90%';
  general.style.backgroundColor = 'blue';
  general.style.height = '100px';
  general.style.padding = '5%';
var projects = document.createElement('div');// goes in container
  projects.textContent = 'Projects';
  projects.style.width = '90%';
  projects.style.padding = '5% ';
  projects.style.backgroundColor = 'yellow';
  projects.style.height = '100px';

var addproj = document.createElement('button') // goes into projects to add projects
  addproj.textContent = 'Add project';
  addproj.style.margin = '4px';
  addproj.style.paddingcursor = "pointer";
  addproj.addEventListener('click', addprojectfunction);
  projects.appendChild(addproj);

[general, projects].forEach((item) => container.appendChild(item));

centerdiv(addproj);

function centerdiv(item){
    item.style.display = 'flex';
    item.style.justifysContent =  'center';
    item.style.alignItems = 'flex-start';
    item.style.flexDirection = 'column';
  }

function addprojectfunction(){
  while (maincont.lastChild) {maincont.removeChild(maincont.lastChild);}

  var projectsad = document.createElement('div');
  projectsad.textContent = 'Page under construction';
  projectsad.style.height = '200px';
  projectsad.style.fontSize = '30px';
  projectsad.style.textAlign = 'center';
  projectsad.style.paddingTop = '180px';
  maincont.appendChild(projectsad);
}

export  {container, addprojectfunction};