import "./styles.css";
// import { greeting } from "./greeting.js";

// console.log(greeting);


//images import
import cupcakeLogo from "./images/cupcakeLogo.png";
import colorfulMuffins from './images/colorful-muffins.jpg';
import bakery from "./images/bakery.jpg";

const logo = document.createElement("img");
logo.src = cupcakeLogo;

const heroImg = document.createElement('img');
heroImg.src = colorfulMuffins;

const locationImg = document.createElement('img');
locationImg.src = bakery;


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


//body
const content = document.querySelector('#content');


        //hero section
const heroTitle = document.createElement('h1');
heroTitle.textContent += "Savor the extraordinary \n — one bite at a time"
content.appendChild(heroTitle);

const heroContainer = document.createElement('div');
heroContainer.setAttribute('id','heroContainer');
content.appendChild(heroContainer);

heroImg.setAttribute('id','heroImg');
heroContainer.appendChild(heroImg);

const heroText = document.createElement('p');
heroText.setAttribute('id','heroText');
heroText.textContent = "We’re a neighborhood bakery doing things the slow way — early mornings, real ingredients, and a deep love for what we make. It’s the kind of place where the coffee’s strong, the ovens stay warm, and everyone’s welcome."
heroContainer.appendChild(heroText);

        //Location and Opening hours

const locationContainer = document.createElement('div');
locationContainer.setAttribute('id','locationContainer');
content.appendChild(locationContainer);

const locationTitle = document.createElement('p');
locationTitle.textContent = `Our location:`;
locationTitle.setAttribute('id','locationTitle');
locationContainer.appendChild(locationTitle);

const locationText = document.createElement('p');
locationText.textContent = `Willow & Rye Bakery\n
                        412 Maplewood Avenue, Suite A\n
                        Willow Glen, CA 95032`;
locationText.setAttribute('id','locationText');
locationContainer.appendChild(locationText);


const hoursTitle = document.createElement('p');
hoursTitle.textContent = `Opening hours:`;
hoursTitle.setAttribute('id','hoursTitle');
locationContainer.appendChild(hoursTitle);

const hoursText = document.createElement('p');
hoursText.textContent = `Monday to Friday: 7:00 AM – 8:00 PM\n
                        Saturday & Sunday: 7:00 AM – 6:00 PM`;
hoursText.setAttribute('id','hoursText');
locationContainer.appendChild(hoursText);

locationImg.setAttribute('id','locationImg');
locationContainer.appendChild(locationImg);



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
