import './styles.css';
export {contactLoad};

//import images
import contact from './images/contact.jpg';


function contactLoad() {
    //images
    const contactImg = document.createElement('img');
    contactImg.src = contact;

    //body
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('class','flex');
    contactImg.setAttribute('id','contactImg');
    contactContainer.appendChild(contactImg);

    const rSideContainer = document.createElement('div');
    rSideContainer.setAttribute('class','container');

        //right-side
    const contactTitle = document.createElement('p');
    contactTitle.textContent = "Contact Us";
    contactTitle.setAttribute('id','contactTitle');

    const phoneTitle = document.createElement('p');
    phoneTitle.setAttribute('id','phoneTitle');
    phoneTitle.textContent = 'Our Phone Number: (123)456-7890';

    const callBtn = document.createElement('button');
    callBtn.textContent = 'Call Now';
    callBtn.setAttribute('id','callBtn');

    const messageForm = document.createElement('form');
    messageForm.setAttribute('id','messageBox');
    messageForm.method = 'post';
    messageForm.action = 'submit';

    const nameBox = document.createElement('div');
    nameBox.setAttribute('class','formDiv');

    // const nameLabel = document.createElement('label');
    // nameLabel.htmlFor = 'name';
    // nameLabel.textContent = 'Your Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.id = 'name';
    nameInput.placeholder = 'First Name*';

    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.name = 'name';
    lastNameInput.id = 'name';
    lastNameInput.placeholder = 'Last Name*';

    messageForm.appendChild(nameBox);

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'email*';

    const textArea = document.createElement('textarea');
    textArea.row = '50';
    textArea.column = '200';
    textArea.name = 'message';
    textArea.id = 'message';
    textArea.placeholder = 'Please write us anything!';

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';

    // nameBox.appendChild(nameLabel);
    nameBox.appendChild(nameInput);
    nameBox.appendChild(lastNameInput);

    messageForm.appendChild(emailInput);
    messageForm.appendChild(textArea);
    messageForm.appendChild(submitBtn);

    rSideContainer.appendChild(contactTitle);
    rSideContainer.appendChild(phoneTitle);
    rSideContainer.appendChild(callBtn);
    rSideContainer.appendChild(messageForm);


    

    
    contactContainer.appendChild(rSideContainer);
    content.appendChild(contactContainer);
    
}