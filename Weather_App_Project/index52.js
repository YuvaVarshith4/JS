const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key

weatherForm.addEventListener('submit',  async event => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city) {
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error.message || error);
        }
    } else {
        displayError("Please enter a city name");
    }
});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data / City not found");
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    //console.log(data);
    
    //Destructuring the data
    const {name: city,
           main: {temp, humidity, feels_like: feelsLike, pressure},
           weather: [{description, id}],
           wind: {speed: windSpeed},
           visibility,
           dt,
           timezone} = data;

    card.textContent = "";
    card.style.display = "flex"; 
    
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    const windDisplay = document.createElement("p");
    const feelsDisplay = document.createElement("p");
    const pressureDisplay = document.createElement("p");
    const visDisplay = document.createElement("p");
    const timeDisplay = document.createElement("p");
    const localTime = new Date((dt + timezone) * 1000);
    const timeString = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    cityDisplay.textContent = `Weather in ${city}`;
    timeDisplay.classList.add('timeDisplay');
    timeDisplay.textContent = `Local time: ${timeString}`;
    tempDisplay.classList.add('tempDisplay');
    tempDisplay.textContent = `Temperature: ${Math.round(temp)}°C`;
    feelsDisplay.classList.add('feelsDisplay');
    feelsDisplay.textContent = `Feels like: ${Math.round(feelsLike)}°C`;
    humidityDisplay.classList.add('humidityDisplay');
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    pressureDisplay.classList.add('pressureDisplay');
    pressureDisplay.textContent = `Pressure: ${pressure} hPa`;
    visDisplay.classList.add('visDisplay');
    visDisplay.textContent = `Visibility: ${Math.round(visibility/1000)} km`;
    windDisplay.classList.add('windDisplay');
    windDisplay.textContent = `Wind: ${windSpeed} m/s`;
    descDisplay.classList.add('descDisplay');
    descDisplay.textContent = description;
    weatherEmoji.classList.add('weatherEmoji');
    weatherEmoji.textContent = getWeatherEmoji(id);

    card.append(cityDisplay, timeDisplay, weatherEmoji, tempDisplay, feelsDisplay, humidityDisplay, pressureDisplay, visDisplay, windDisplay, descDisplay);


}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case weatherId < 300:
            return '⛈️';
        case weatherId < 500:
            return '🌧️';
        case weatherId < 600:
            return '🌦️';
        case weatherId < 700:
            return '❄️';
        case weatherId < 800:
            return '🌫️';
        case weatherId === 800:
            return '☀️';
        case weatherId <= 804:
            return '☁️';
        default:
            return '❓';
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
