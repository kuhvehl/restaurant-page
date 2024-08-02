export function homepageDisplay() {
    const content = document.querySelector('#content');

    const contentHeader = document.createElement('div');
    const h2Header = document.createElement('h2');
    const h3Header = document.createElement('h3');

    contentHeader.classList.add('content-header');
    
    h2Header.textContent = 'Home';
    h3Header.textContent = "World's Best Pizza!!!";

    const contentMain = document.createElement('div');
    const h3Description = document.createElement('h3');
    const h3Price = document.createElement('h3');
    const pBestpizza = document.createElement('p');
    const pPizzaPrice = document.createElement('p');
    const menuLink = document.createElement('a');
    const pFriends = document.createElement('p');
    const pFriendsPrice = document.createElement('p');
    const pLaughs = document.createElement('p');
    const pLaughsPrice = document.createElement('p');
    const pHighFives = document.createElement('p');
    const pHighFivesPrice = document.createElement('p');
    const pGoodVibes = document.createElement('p');
    const pGoodVibesPrice = document.createElement('p');

    contentMain.classList.add('content-main');

    h3Description.classList.add('left');
    pBestpizza.classList.add('left');
    pFriends.classList.add('left');
    pLaughs.classList.add('left');
    pHighFives.classList.add('left');
    pGoodVibes.classList.add('left');

    h3Description.textContent = 'Description';
    pBestpizza.textContent = "World's best pizza";
    pFriends.textContent = 'Friends';
    pLaughs.textContent =  'Laughs';
    pHighFives.textContent = 'High fives';
    pGoodVibes.textContent = 'Good vibes';

    h3Price.classList.add('right');
    pPizzaPrice.classList.add('right');
    pFriendsPrice.classList.add('right');
    pLaughsPrice.classList.add('right');
    pHighFivesPrice.classList.add('right');
    pGoodVibesPrice.classList.add('right');

    h3Price.textContent = 'Price'
    pPizzaPrice.textContent = 'see '
    menuLink.textContent = 'menu'
    pFriendsPrice.textContent = 'BYO'
    pLaughsPrice.textContent = 'complimentary'
    pHighFivesPrice.textContent = 'free (limit one per customer)'
    pGoodVibesPrice.textContent = 'unlimited refills'

    contentHeader.appendChild(h2Header);
    contentHeader.appendChild(h3Header);

    contentMain.appendChild(h3Description);
    contentMain.appendChild(h3Price);
    contentMain.appendChild(pBestpizza);
    contentMain.appendChild(pPizzaPrice)
    pPizzaPrice.appendChild(menuLink);
    contentMain.appendChild(pFriends);
    contentMain.appendChild(pFriendsPrice);
    contentMain.appendChild(pLaughs);
    contentMain.appendChild(pLaughsPrice);
    contentMain.appendChild(pHighFives);
    contentMain.appendChild(pHighFivesPrice);
    contentMain.appendChild(pGoodVibes);
    contentMain.appendChild(pGoodVibesPrice);

    content.appendChild(contentHeader);
    content.appendChild(contentMain);
}