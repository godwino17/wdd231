const dateTime = document.querySelector('.time');
const name = document.querySelector('.name');
const mail = document.querySelector('.mail');
const phone = document.querySelector('.phone');
const BusinessName = document.querySelector('.business');

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

document.getElementById('year').textContent = year;
dateTime.textContent = formattedDate;

const info = new URLSearchParams(window.location.search);

name.textContent = `${info.get('firstName')} ${info.get('lastName')}`;
mail.textContent = info.get('email');
phone.textContent = info.get('phone');
BusinessName.textContent = info.get('orgName')