export {menuLoad}
import './styles.css';


//images import
import menuHero from "./images/menu-hero.jpg";

import bread from "./images/bread.png"

import pastries from "./images/croissant.png"

function menuLoad () {

    //images import
    const menuHeroImg = document.createElement("img");
    menuHeroImg.src = menuHero;

    const breadImg = document.createElement('img');
    breadImg.src = bread;

    const pastriesImg = document.createElement('img');
    pastriesImg.src = pastries;

    //body
    const content = document.querySelector('#content');
    content.innerHTML = '';

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


    //menu items section
    const menuSection = document.createElement('div');
    menuSection.setAttribute('id','menuSection');
        //Breads
    const breadText = document.createElement('p');
    breadText.setAttribute('class','menuTitles');
    breadText.textContent = 'Breads';

    menuSection.appendChild(breadText);

    const breadContainer = document.createElement('div');
    breadContainer.setAttribute('id','menuContainer');

    const breadItems = document.createElement('p');
    breadItems.setAttribute('class','menuItems');
    breadItems.textContent =  `Sourdough Boule\n
                                Rustic Baguette\n
                                Multigrain Loaf\n
                                Milk Bread Pull-Apart Rolls\n
                                Olive & Herb Focaccia`;

    breadContainer.appendChild(breadItems);

    const breadPrices = document.createElement('p');
    breadPrices.setAttribute('class','menuPrices');
    breadPrices.textContent = `$5.50\n
                            $3.75\n
                            $6.00\n
                            $4.25\n
                            $4.50`;

    breadContainer.appendChild(breadPrices);

    breadImg.setAttribute('class','menuImages');
    breadContainer.appendChild(breadImg);

    menuSection.appendChild(breadContainer);
        //End of bread

        //Pastries
    const pastriesText = document.createElement('p');
    pastriesText.setAttribute('class','menuTitles');
    pastriesText.textContent = 'Pastries';

    menuSection.appendChild(pastriesText);

    const pastriesContainer = document.createElement('div');
    pastriesContainer.setAttribute('id','menuContainer');

    const pastriesItems = document.createElement('p');
    pastriesItems.setAttribute('class','menuItems');
    pastriesItems.textContent =  `Sourdough Boule\n
                                Rustic Baguette\n
                                Multigrain Loaf\n
                                Milk Bread Pull-Apart Rolls\n
                                Olive & Herb Focaccia`;

    pastriesContainer.appendChild(pastriesItems);

    const pastriesPrices = document.createElement('p');
    pastriesPrices.setAttribute('class','menuPrices');
    pastriesPrices.textContent = `$5.50\n
                            $3.75\n
                            $6.00\n
                            $4.25\n
                            $4.50`;

    pastriesContainer.appendChild(pastriesPrices);

    pastriesImg.setAttribute('class','menuImages');
    pastriesContainer.appendChild(pastriesImg);

    menuSection.appendChild(pastriesContainer);
        //End of Pastries





    content.appendChild(menuSection)
    

};