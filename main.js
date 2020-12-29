 const api = {
     key: "b114c682f8d346cf22ad132fef1710b8",
     base: "https://api.openweathermap.org/data/2.5/"
 }

 const searchbox = document.querySelector(".search-box");
 searchbox.addEventListener("keypress", setQuery);

 function setQuery(evt) {
    if(evt.keyCode == 13) {
        getResults(searchbox.value);
    }
 }

 function getResults(query) {
     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
     .then(weather => {
         return weather.json();
     }).then(displayResults);
 }

 function displayResults (weather) {
     console.log(weather);
     let city = document.querySelector('.location .city');
     city.innerText = `${weather.name}, ${weather.sys.country}`;
 }
