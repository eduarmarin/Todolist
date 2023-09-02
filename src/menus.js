
var container = document.createElement('div'); // this one contain general and projects in a column on the left side
  container.style.width = '30%';

var general = document.createElement('div'); // goes in container
  general.textContent = 'general';
  general.style.width = '100%';
  general.style.backgroundColor = 'blue';
  general.style.height = '100px';
var projects = document.createElement('div');// goes in container
  projects.textContent = 'projects';
  projects.style.width = '100%';
  projects.style.backgroundColor = 'yellow';
  projects.style.height = '100px';

var addproj = document.createElement('button') // goes into projects to add projects
  addproj.textContent = 'Add project';
  projects.appendChild(addproj);

[general, projects].forEach((item) => container.appendChild(item));

centerdiv(addproj);

function centerdiv(item){
    item.style.display = 'flex';
    item.style.justifysContent =  'center';
    item.style.alignItems = 'flex-start';
    item.style.flexDirection = 'column';
  }

export default container;