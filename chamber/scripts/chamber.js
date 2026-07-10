// HAMBURGER MENU
const hamBtn = document.getElementById('hambtn');
const navBtn = document.querySelector('.main-nav');

hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('show');
    navBtn.classList.toggle('show');
})



//  CURRENT DATE AND TIME
const year = new Date().getFullYear();
const now = new Date();

const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
});

const formattedDate = formatter.format(now).replace(",", "");

document.getElementById("year").textContent = year;
document.getElementById("now").textContent = `Last Modified: ${formattedDate}`;



// TOGGLE GRID & LIST VIEW
const membersData = "data/members.json";
const viewGrid = document.getElementById('grid');
const viewList = document.getElementById('list');
const viewContainer = document.querySelector('.view');

async function DisplayMembersCard() {
    const request = await fetch(membersData);
    const result = await request.json();

    viewGrid.addEventListener('click', () => {

        viewContainer.innerHTML = "";

        for (data of result) {
            let image = data.image;
            let name = data.name;
            let address = data.address;
            let phone = data.number;
            let website = data.website;

            let section = document.createElement('section');
            section.classList.remove('list');
            section.classList.add('grid');

            let sectionHeading = document.createElement('h2');
            sectionHeading.textContent = name;

            let sectionImage = document.createElement('img');
            sectionImage.setAttribute('src', image);
            sectionImage.setAttribute('alt', 'Company logo');
            sectionImage.setAttribute('width', '90');
            
            let sectionAddress = document.createElement('p');
            sectionAddress.innerHTML = `<span>ADDRESS:</span> ${address}`;

            let sectionPhone = document.createElement('p');
            sectionPhone.innerHTML = `<span>PHONE:</span> ${phone}`;

            let anchor = document.createElement('a')
            anchor.innerHTML = website;
            anchor.setAttribute('href', website);
            let sectionURL = document.createElement('p');
            sectionURL.innerHTML= `<span>URL:</span>`;
            sectionURL.append(anchor);

            const divP = document.createElement('div');
            const divI = document.createElement('div');

            divI.append(sectionImage);
            divP.append(sectionAddress);
            divP.append(sectionPhone);
            divP.append(sectionURL);

            section.append(sectionHeading);
            
            section.append(divI)
            section.append(divP);

            if (viewGrid) {
                viewContainer.classList.remove('lines');
                viewContainer.classList.add('view');
                viewContainer.append(section);
            }
        }
    })


    viewList.addEventListener('click', () => {

        viewContainer.innerHTML = "";

        for (data of result) {
            let name = data.name;
            let address = data.address;
            let phone = data.number;
            let website = data.website;

            let section = document.createElement('section');
            section.classList.remove('grid');
            section.classList.add('list');


            let sectionHeading = document.createElement('h2');
            sectionHeading.textContent = name;

            let sectionAddress = document.createElement('p');
            sectionAddress.innerHTML = `<span>ADDRESS:</span> ${address}`;

            let sectionPhone = document.createElement('p');
            sectionPhone.innerHTML = `<span>PHONE:</span> ${phone}`;

            let anchor = document.createElement('a')
            anchor.innerHTML = website;
            anchor.setAttribute('href', website);
            let sectionURL = document.createElement('p');
            sectionURL.innerHTML = `<span>URL:</span>`;
            sectionURL.append(anchor);

            section.append(sectionHeading);
            section.append(sectionAddress);
            section.append(sectionPhone);
            section.append(sectionURL);

            if (viewList) {
                viewContainer.classList.remove('view');
                viewContainer.classList.add('lines');
                viewContainer.append(section);
            }

        }
    })
    
}

DisplayMembersCard();