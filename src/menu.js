export {menuLoad}
import './styles.css';


//images import
import menuHero from "./images/menu-hero.jpg";

function menuLoad () {

    //images import
    const menuHeroImg = document.createElement("img");
    menuHeroImg.src = menuHero;

    //body
    const content = document.querySelector('#content');

            //hero section
    const heroTitle = document.createElement('h1');
    heroTitle.textContent += "Our Menu"
    content.appendChild(heroTitle);

    const heroContainer = document.createElement('div');
    heroContainer.setAttribute('class','heroContainer');
    content.appendChild(heroContainer);

    menuHeroImg.setAttribute('class','heroImg');
    heroContainer.appendChild(menuHeroImg);

    const heroText = document.createElement('p');
    heroText.setAttribute('class','heroText');
    heroText.textContent = "From crusty sourdough to sweet little cupcakes, everything here is made by hand, in-house, and with care. Take a look at what’s coming out of the oven today."
    heroContainer.appendChild(heroText);

};