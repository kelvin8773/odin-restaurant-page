import './style.css';
import MainImage from './dim-sum.jpg';
import MenuImage from './dim-sum-menu.png'

console.log('Page Starting ....');

const loadPage = () => {
  const content = document.getElementById('content');

  content.appendChild(headerModule());
  content.appendChild(homeModule());
  content.appendChild(menuModule());
  content.appendChild(contactModule());

};

const headerModule = () => {
  const header = document.createElement('div');
  header.id = 'header-module';

  const headline = document.createElement('h1');
  headline.innerText = 'Dim Sum House';

  header.appendChild(headline);

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

  menu.innerHTML = '<h2>Menu</h2>'

  const menuImage = new Image();
  menuImage.src = MenuImage;

  menu.appendChild(menuImage);

  menu.insertAdjacentHTML("beforeend", '<hr align="center" width="75%">')

  return menu;
}

const contactModule = () => {
  const contact = document.createElement('div');
  contact.id = 'contact-module';

  contact.innerHTML = '<h2>Contact</h2> <h5> Telephone </h5> <p>+1 415 333 8888</p> <h5> Address</h5> <p>No.1234 College Ave</p> <p>San Mateo, CA, USA</p>';

  return contact;
}


loadPage();






