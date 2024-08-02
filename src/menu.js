export function menuDisplay() {
    const content = document.querySelector('#content');

    const contentHeader = document.createElement('div');
    const h2Header = document.createElement('h2');
    const h3Header = document.createElement('h3');


    contentHeader.classList.add('content-header');
    
    h2Header.textContent = 'Menu';
    h3Header.textContent = "*Whole Pie Prices*";


    const contentMain = document.createElement('div');
    const phone = document.createElement('p');
    const phoneInfo = document.createElement('p');
    const email = document.createElement('p');
    const emailInfo = document.createElement('p');
    const address = document.createElement('p');
    const address2 = document.createElement('p');
    const addressInfo = document.createElement('p');
    const addressInfo2 = document.createElement('p');


    contentMain.classList.add('content-main');

    phone.classList.add('left');
    email.classList.add('left');
    address.classList.add('left');
    address2.classList.add('left');


    phone.textContent = 'Cheese';
    email.textContent = 'Pepperoni'
    address.textContent =  'Margherita';
    address2.textContent = 'Hawaiian';

    phoneInfo.classList.add('right');
    emailInfo.classList.add('right');
    addressInfo.classList.add('right');
    addressInfo2.classList.add('right');


    phoneInfo.textContent = '$15'
    emailInfo.textContent = '$18'
    addressInfo.textContent = '$20'
    addressInfo2.textContent = '$20'

   
    contentHeader.appendChild(h2Header);
    contentHeader.appendChild(h3Header);


    contentMain.appendChild(phone);
    contentMain.appendChild(phoneInfo)
    contentMain.appendChild(email);
    contentMain.appendChild(emailInfo);
    contentMain.appendChild(address);
    contentMain.appendChild(addressInfo);
    contentMain.appendChild(address2);
    contentMain.appendChild(addressInfo2);

    content.appendChild(contentHeader);
    content.appendChild(contentMain);
}