//import "./styles.css";
import { pageLoad } from "./initial.js";
//pageLoad();

import { menuLoad } from "./menu.js";
//menuLoad();

import {contactLoad} from "./contact.js";

//images import
import cupcakeLogo from "./images/cupcakeLogo.png";

const logo = document.createElement("img");
logo.src = cupcakeLogo;

function startPage() {

    //header section
    const header = document.querySelector('header');

    header.appendChild(logo);
    logo.setAttribute('id','logo');

    const phBtn = document.createElement('button');
    phBtn.setAttribute('id','phBtn');
    header.appendChild(phBtn);
    phBtn.textContent = '(123)456-7890';

    //navigation bar
    const nav = document.querySelector('nav');
    const navArray = ['#home','#menu','#contact'];


    for (const child of nav.children) {
            child.setAttribute('class','navButtons');
            child.setAttribute('id', navArray[0]);
            navArray.shift();
    }


    //body section loading
    const navButtons = document.querySelectorAll('.navButtons');
    let section = pageLoad();
    for (let btn=0; btn<3;btn++) {
        navButtons[btn].addEventListener('click',()=> {
            if (btn == 0) {
                section = pageLoad();
            } else if(btn == 1) {
                section = menuLoad();
            } else if(btn == 2) {
                section = contactLoad();
            }
        });
    }

    const footer = document.querySelector('footer');

    const copyright = document.createElement('p');
    copyright.textContent = '© 2025 Willow & Rye. All rights reserved';
    copyright.setAttribute('id','copyright');
    footer.appendChild(copyright);

    const myInfo = document.createElement('p');
    myInfo.textContent = 'Website by Moe — moezatmoepwint@gmail.com';
    myInfo.setAttribute('id','myInfo');
    footer.appendChild(myInfo);

}

startPage();
