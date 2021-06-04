let weather = {
    api: "badd8a096fdde6f83e9693b37af76d49",
    appweather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&&appid="+ this.api
        )
        .then((response) => response.json())
        .then((data) => this.appswork(data));
    },
    appswork: function(data) {
        const { name } = data;
        const { temp } = data.main;
        const { icon, description } = data.weather[0];
        const { speed } = data.wind;
        console.log(name,temp,icon,description,speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".weather").innerText = description;
        document.querySelector(".speed").innerText = speed + "km/h";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },
    search: function() {
    this.appweather(document.querySelector('.media').value);
    },
};


document.querySelector(".serchbox .search").addEventListener("click", function() {
    weather.search()
});

document.querySelector(".media").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})