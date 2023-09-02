var navbar = document.createElement('div'); //  this one display task list in a column on the right screen side 
  navbar.style.width = '80%';
  navbar.style.height = '100px';
  navbar.textContent = 'TODO LIST';
  navbar.style.backgroundColor = 'gray';
  navbar.style.display = 'flex';
  navbar.style.justifyContent =  'center';
  navbar.style.alignItems = 'center';

if (window.matchMedia("(max-width: 600px)").matches) {
  container.style.width = "100%";
}
  export default navbar;
