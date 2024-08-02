import './style.css';
import { homepageDisplay } from './homepage';
import { contactDisplay } from './contact';
import { menuDisplay } from './menu';




function loadPage(page) {
    document.querySelector('#content').innerHTML = '';

    let nav = document.querySelectorAll('button');

    function addListeners() {
        nav.forEach(button => {
            button.addEventListener('click', function(e) {
                const page = e.target.getAttribute('class');
                loadPage(page);
            } )  
        });
    }


    if (page === 'contact') {
        contactDisplay();
    } else if (page === 'menu') {
        menuDisplay();
    } else {
        homepageDisplay();
        nav = document.querySelectorAll('button');
        addListeners();
    }
}

loadPage();


