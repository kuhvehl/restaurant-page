const initMenuPage = () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = "Cavell's Pizza";

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = "Our Menu:";

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');

    const menuItems = ['About', 'Menu', 'Contact'];

    menuItems.forEach(itemText => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = itemText;
        a.id = itemText.toLowerCase()
        li.appendChild(a);
        ul.appendChild(li);
      });

      header.appendChild(h1);
      header.appendChild(nav);
      nav.appendChild(ul);

      const img = document.createElement('img');
      img.src = '/src/bitcoinpizza.jpg';
      img.alt = 'Pizza Money';

      const h2 = document.createElement('h2');
      h2.textContent = 'Large Pizza | 10k BTC';

    contentDiv.appendChild(header);
    contentDiv.appendChild(img);
    contentDiv.appendChild(menuHeading)
    contentDiv.appendChild(h2);
  };
  
  export default initMenuPage;