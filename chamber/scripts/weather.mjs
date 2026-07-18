import showMemberCard from "./members-card.mjs";

const temp = document.querySelector('.c-temp');
const weIcon = document.querySelector('.w-icon');
const tempDes = document.querySelector('figcaption');
const toDate = document.querySelector('.today-date');


const lat = 7.91;
const lon = 5.02;
const ki = '8c8222b226a4ca6de9189766241f6612';

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ki}&units=metric`;
const todayURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ki}&units=metric`;

// Function to show date for each weather cards
function displayDate(num) {
    const today = new Date();
    today.setDate(today.getDate() + num)
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(today).toLowerCase();
    const capDate= formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)

    return capDate;
}

    
async function getWeatherInfos() {
    try {
        const todayResponse = await fetch(todayURL);

        if (!todayResponse.ok ) {
            throw Error(await `Failed to fetch Live weather: ${todayResponse.text()}`);
        }

        const liveData = await todayResponse.json();
        // console.log(liveData);
        temp.textContent = `${liveData.main.temp} ℃`;
        tempDes.textContent = liveData.weather[0].description;
        toDate.textContent = displayDate(0);

        const iconPath = `https://openweathermap.org/img/wn/${liveData.weather[0].icon}@2x.png`;
        weIcon.setAttribute('src', iconPath);
        weIcon.setAttribute('alt', liveData.weather[0].description);



        // Second API call for 3 days weather forecast.
        const forecastResponse = await fetch(forecastURL);
        if (!forecastResponse.ok) {
            throw Error(await `Failed to fetch Forecast Weather: ${forecastResponse.text()}`);
        }

        // DAY 1
        const forecastData = await forecastResponse.json();
        document.querySelector('.day1-date').textContent = displayDate(1);

        const dayOneIconURL = `https://openweathermap.org/img/wn/${forecastData.list[8].weather[0].icon}@2x.png`;
        const forecastIcon1= document.querySelector('.day1-icon');
        forecastIcon1.setAttribute('src', dayOneIconURL);
        forecastIcon1.setAttribute('alt', forecastData.list[8].weather[0].description);
        document.querySelector('.day1-descrip').textContent = forecastData.list[8].weather[0].description;
        document.querySelector('.day1-temp').textContent = `${forecastData.list[8].main.temp}℃`;

        // DAY 2
        document.querySelector('.day2-date').textContent = displayDate(2);

        const dayTwoIconURL = `https://openweathermap.org/img/wn/${forecastData.list[16].weather[0].icon}@2x.png`;
        const forecastIcon2 = document.querySelector('.day2-icon');
        forecastIcon2.setAttribute('src', dayTwoIconURL);
        forecastIcon2.setAttribute('alt', forecastData.list[16].weather[0].description);
        document.querySelector('.day2-descrip').textContent = forecastData.list[16].weather[0].description;
        document.querySelector('.day2-temp').textContent = `${forecastData.list[16].main.temp}℃`;


        // DAY 3
        document.querySelector('.day3-date').textContent = displayDate(3);

        const dayThreeIconURL = `https://openweathermap.org/img/wn/${forecastData.list[24].weather[0].icon}@2x.png`;
        const forecastIcon3 = document.querySelector('.day3-icon');
        forecastIcon3.setAttribute('src', dayThreeIconURL);
        forecastIcon3.setAttribute('alt', forecastData.list[24].weather[0].description);
        document.querySelector('.day3-descrip').textContent = forecastData.list[24].weather[0].description;
        document.querySelector('.day3-temp').textContent = `${forecastData.list[24].main.temp} ℃`;
    }

    catch (error) {
        console.log(error);
    }
}

showMemberCard();
getWeatherInfos();
