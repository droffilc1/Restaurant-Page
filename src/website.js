import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('logo');
  restaurantName.textContent = 'Chocolate';

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}


function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('button-nav');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveBtn(homeBtn);
    loadHome();
  })

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('button-nav');
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('button-nav');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactBtn);
    loadContact();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;  
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Clifford Mapesa`;

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/droffilc1';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.button-nav'));
  loadHome();
}

export default initializeWebsite;