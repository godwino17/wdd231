// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Create required variables for the API URL
const myKey = "8c8222b226a4ca6de9189766241f6612";
const myLat = 49.75;
const myLong = 6.64;

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;


async function apiFetch() {
    try {
        response = await fetch(myURL);

        if (response.ok) {
            data = await response.json();
            // console.log(data); // Testing only
            displayResults(data); // uncomment when ready
        }

        else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }  
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}℃`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.innerHTML = data.weather[0].description;
}