import './style.css';
import MainImage from './dim-sum.jpg';
import MenuImage from './dim-sum-menu.png'

const initialize = () => {
  document.body.prepend(headerModule());

  const home = homeModule();
  const menu = menuModule();
  const contact = contactModule();

  document.getElementById('home-link').addEventListener('click', () => { loadPage(home); });
  document.getElementById('menu-link').addEventListener('click', () => { loadPage(menu); });
  document.getElementById('contact-link').addEventListener('click', () => { loadPage(contact); });

  loadPage(home);
}

const loadPage = (node) => {
  const content = document.getElementById('content');
  let currentNode = content.childNodes[0];

  currentNode.replaceWith(node);
}

const headerModule = () => {
  const header = document.createElement('header');
  header.id = 'header-module';

  const headline = document.createElement('h1');
  headline.innerText = 'Dim Sum House';

  header.appendChild(headline);

  const navbar = document.createElement('nav');
  navbar.id = 'nav-bar';

  navbar.innerHTML = '<a href="#" id="home-link">Home</a> <a href = "#" id = "menu-link" > Menu</a> <a href="#" id="contact-link">Contact</a>'

  header.appendChild(navbar);

  header.insertAdjacentHTML("beforeend", '<hr align="center" width="75%">')

  return header

}

const homeModule = () => {
  const home = document.createElement('div');
  home.id = 'home-module';

  const slogan = document.createElement('p')
  slogan.innerText = 'Welcome to Dim Sum House, food make by heart!';

  home.appendChild(slogan);

  const mainImage = new Image();
  mainImage.src = MainImage;
  mainImage.id = 'main-image';

  home.appendChild(mainImage);

  home.insertAdjacentHTML("beforeend", '<hr align="center" width="75%">')

  return home;
}

const menuModule = () => {
  const menu = document.createElement('div');
  menu.id = 'menu-module';

  const menuImage = new Image();
  menuImage.src = MenuImage;

  menu.appendChild(menuImage);

  menu.insertAdjacentHTML("beforeend", '<hr align="center" width="75%">')

  return menu;
}

const contactModule = () => {
  const contact = document.createElement('div');
  contact.id = 'contact-module';

  contact.innerHTML = '<h5> Telephone </h5> <p>+1 415 333 8888</p> <h5> Address</h5> <p>No.1234 College Ave</p> <p>San Mateo, CA, USA</p>';

  return contact;
}

initialize();






