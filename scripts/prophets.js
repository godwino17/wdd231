const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const respond = await fetch(url);
    const data = await respond.json();
    // console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets);
}
getProphetData();

function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        p1.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute('width', '290');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}
