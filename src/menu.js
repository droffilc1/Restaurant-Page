function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem(
      'Sin Cake',
      'Our flourless Sin Cake is made with ground organic almonds'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Strawberry Shortcake',
      'Dark chocolate cake, baked strawberry compote, rich whipped cream, and fresh organic strawberries'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Big Warm Cupcake',
      'Chocolate cupcake served warm and drenched in bittersweet chocolate ganache. Decorated with rich whipped cream'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Coconut Cheesecake',
      'Made with fresh cream, and with coconut milk'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Gelato',
      'Rich, dense, Italian-style gelato. A little less sweet, and lots more flavor!'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Ecstasy Cake',
      'Strong, dark chocolate cake, served with a side of whipped cream'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Chocolate Ecstasy Sundae',
      'Topped with a slice of our dark chocolate Ecstasy cake, and rich whipped cream'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Dessert Orgy',
      'A sampler platter of sweets to share'
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add(menu-item);

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;

  const foodImage = document.createElement('img');
  foodImage.src = `images/menu/${name.toLowerCase()}.webp`;
  foodImage.src = `images/menu/${name.toLowerCase()}.jpeg`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
