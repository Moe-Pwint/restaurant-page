export {menuLoad}
import './styles.css';


//images import
import menuHero from "./images/menu-hero.jpg";

import bread from "./images/bread2.png"

import pastries from "./images/croissant.png"

import cakes from './images/cake.png'

import muffin from './images/cupcake3.png';

import drinks from './images/coffee2.png';

function menuLoad () {

    //images import
    const menuHeroImg = document.createElement("img");
    menuHeroImg.src = menuHero;

    const breadImg = document.createElement('img');
    breadImg.src = bread;

    const pastriesImg = document.createElement('img');
    pastriesImg.src = pastries;

    const cakesImg = document.createElement('img');
    cakesImg.src = cakes;

    const muffinImg = document.createElement('img');
    muffinImg.src = muffin;

    const drinksImg = document.createElement('img');
    drinksImg.src = drinks;

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
        //Drinks
        const drinksText = document.createElement('p');
        drinksText.setAttribute('class','menuTitles');
        drinksText.textContent = 'Drinks';
    
        menuSection.appendChild(drinksText);
    
        const drinksContainer = document.createElement('div');
        drinksContainer.setAttribute('id','menuContainer');
    
        const drinksItems = document.createElement('p');
        drinksItems.setAttribute('class','menuItems');
        drinksItems.textContent =  `Drip Coffee (House Blend)\n
                                    Espresso / Americano / Cappuccino\n
                                    Chai Latte\n
                                    Iced Matcha\n
                                    Fresh-Squeezed Orange Juice`;
    
                                    drinksContainer.appendChild(drinksItems);
    
        const drinksPrices = document.createElement('p');
        drinksPrices.setAttribute('class','menuPrices');
        drinksPrices.textContent = `$2.75\n
                                $3.25\n
                                $3.50\n
                                $3.75\n
                                $3.50`;
    
        drinksContainer.appendChild(drinksPrices);
    
        drinksImg.setAttribute('class','menuImages');
        drinksContainer.appendChild(drinksImg);
    
        menuSection.appendChild(drinksContainer);
            //End of Drinks

            //Cakes and Slices
    const cakesText = document.createElement('p');
    cakesText.setAttribute('class','menuTitles');
    cakesText.textContent = 'Cakes and Slices';

    menuSection.appendChild(cakesText);

    const cakesContainer = document.createElement('div');
    cakesContainer.setAttribute('id','menuContainer');

    const cakesItems = document.createElement('p');
    cakesItems.setAttribute('class','menuItems');
    cakesItems.textContent =  `Dark Chocolate Ganache Cake\n
                                Carrot Cake with Cream Cheese Frosting\n
                                Earl Grey Tea Cake\n
                                Vanilla Bean Loaf Cake`;

    cakesContainer.appendChild(cakesItems);

    const cakesPrices = document.createElement('p');
    cakesPrices.setAttribute('class','menuPrices');
    cakesPrices.textContent = `$4.50\n
                            $4.25\n
                            $4.50\n
                             $4.00;`

    cakesContainer.appendChild(cakesPrices);

    cakesImg.setAttribute('class','menuImages');
    cakesContainer.appendChild(cakesImg);

    menuSection.appendChild(cakesContainer);
        //End of Cakes and Slices
        
        //Cupcakes and Muffins
    const muffinText = document.createElement('p');
    muffinText.setAttribute('class','menuTitles');
    muffinText.textContent = 'Cupcakes and Muffins';

    menuSection.appendChild(muffinText);

    const muffinContainer = document.createElement('div');
    muffinContainer.setAttribute('id','menuContainer');

    const muffinItems = document.createElement('p');
    muffinItems.setAttribute('class','menuItems');
    muffinItems.textContent =  `Chocolate Fudge Cupcake \n
                                    Red Velvet Cupcake\n
                                    Lemon Cream Cupcake\n
                                    Blueberry Crumble Muffin\n
                                    Banana Walnut Muffin`;

                                muffinContainer.appendChild(muffinItems);

    const muffinPrices = document.createElement('p');
    muffinPrices.setAttribute('class','menuPrices');
    muffinPrices.textContent = `$3.50\n
                            $3.75\n
                            $3.50\n
                            $3.75\n
                            $3.50`;

    muffinContainer.appendChild(muffinPrices);

    muffinImg.setAttribute('class','menuImages');
    muffinContainer.appendChild(muffinImg);

    menuSection.appendChild(muffinContainer);
        //End of Muffins

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
    pastriesItems.textContent =  `Classic Butter Croissant\n
                                Almond Croissant\n
                                Raspberry Danish\n
                                Morning Bun\n
                                Lemon Glaze Kouign-Amann`;

    pastriesContainer.appendChild(pastriesItems);

    const pastriesPrices = document.createElement('p');
    pastriesPrices.setAttribute('class','menuPrices');
    pastriesPrices.textContent = `$3.50\n
                            $4.25\n
                            $4.00\n
                            $3.75\n
                            $4.50`;

    pastriesContainer.appendChild(pastriesPrices);

    pastriesImg.setAttribute('class','menuImages');
    pastriesContainer.appendChild(pastriesImg);

    menuSection.appendChild(pastriesContainer);
        //End of Pastries

    
    content.appendChild(menuSection);
};