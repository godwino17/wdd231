import { temples } from '../data/temples.js';
import { url } from '../data/temples.js';


const showHere = document.querySelector('#showHere');
const myDialog = document.querySelector('#myDialog');
const title = document.querySelector('#myDialog h2');
const closeBtn = document.querySelector('#myDialog button');
const info = document.querySelector('#myDialog p');

closeBtn.addEventListener('click', () => {
    myDialog.close();
});

function displayItem(data) {
    data.forEach(x => {
        // console.log(x);
        const photo = document.createElement('img');
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;

        photo.addEventListener('click', () => showStuff(x));
        showHere.append(photo);
    })
}

displayItem(temples);

function showStuff(x) {
    title.textContent = x.name;
    info.textContent = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
    myDialog.showModal();
}