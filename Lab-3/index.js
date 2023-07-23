const apiKey = "7e3f21edee540e6110af347b55eb1ab2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name + " , " + data.sys.country;
    document.querySelector(".date").innerText = formDate();
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".weather").innerHTML = data.weather[0].main;
    document.querySelector(".low-high").innerHTML = Math.round(data.main.temp_min) + " °C  / " + Math.round(data.main.temp_max) + " °C";
}

// when we hit the search icon, then only call the function and show the respective results.
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

function formDate() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"];
    let todayDate = new Date();
    let day = days[todayDate.getDay()];
    let month = months[todayDate.getMonth()];
    let year = todayDate.getFullYear();
    let date = todayDate.getDate();
    return `${day} ${date} ${month} ${year}`;
}

