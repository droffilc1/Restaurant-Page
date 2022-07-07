function createHome() {
  const home = document.createElement('div');
  home.classList('home');

  const centerDiv = document.createElement('h3');
  centerDiv.textContent = 'The Authentic Chocolate Experience';
  home.appendChild(centerDiv);

  return home;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome