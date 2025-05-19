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
    let section;
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

    //footer
    const footer = document.createElement('div');
    footer.setAttribute('id','footer');

    const copyright = document.createElement('p');
    copyright.textContent = '© 2025 Willow & Rye. All rights reserved';
    copyright.setAttribute('id','copyright');
    footer.appendChild(copyright);

    const myInfo = document.createElement('p');
    myInfo.textContent = 'Website by Moe — moezatmoepwint@gmail.com';
    myInfo.setAttribute('id','myInfo');
    footer.appendChild(myInfo);

    content.appendChild(footer);
}

startPage();
// for (const btn of navButtons) {
//     if (btn == home) {
//         btn.addEventListener('click',()=> {
//             currentSection = pageLoad();
//             console.log('pageLoad works')});
//     } else if (btn == menu) {
//         btn.addEventListener('click',()=> {
//             currentSection = menuLoad();
//             console.log('menuLoad works')});
//     } else if (btn == contact) {
//         btn.addEventListener('click',()=> {
//             currentSection = contactLoad();
//             console.log('contactLoad works')});
//     }
// }

// for (let btn of navButtons) {
//     btn.addEventListener('click',()=> {
//         if (btn.getAttribute('#home')) {
//             currentSection = pageLoad();
//             console.log('works');
//         }
//         else if (btn.getAttribute('#menu')) {
//             currentSection = menuLoad();
//             console.log('works');
//         }
//         else if(btn.getAttribute('#contact')) {
//             currentSection = contactLoad();
//         }
//     })
// }
// }


