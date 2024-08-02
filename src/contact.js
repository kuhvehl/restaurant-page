export function contactDisplay() {
    const content = document.querySelector('#content');

    const contentHeader = document.createElement('div');
    const h2Header = document.createElement('h2');

    contentHeader.classList.add('content-header');
    
    h2Header.textContent = 'Contact';

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

    phone.classList.add('contact-left');
    email.classList.add('contact-left');
    address.classList.add('contact-left');
    address2.classList.add('contact-left');


    phone.textContent = 'Phone:';
    email.textContent = 'Email:';
    address.textContent =  'Address:';

    phoneInfo.classList.add('contact-right');
    emailInfo.classList.add('contact-right');
    addressInfo.classList.add('contact-right');
    addressInfo2.classList.add('contact-right');


    phoneInfo.textContent = '123-456-7890'
    emailInfo.textContent = 'info@cavellspizza.com'
    addressInfo.textContent = '123 Main Street'
    addressInfo2.textContent = 'New York, NY 12345'

   
    contentHeader.appendChild(h2Header);

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