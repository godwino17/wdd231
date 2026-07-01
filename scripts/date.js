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
