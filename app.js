document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch( city ) {
    var key = 'c7f0a59cfe061fccd27eceaf4d8bb0a8';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
          return resp.json()
        }) // Convert data to json
        .then(function(data){
            console.log(data);
        })
        .catch(function (){
            // catch any errors
        })
}
function cityWeather(e){
    weatherDataFetch('Tallinn');
}
