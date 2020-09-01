document.getElementById("btn").onclick = function() {
var xhttp = new XMLHttpRequest();
var city_name = document.getElementById("input").value;
var api_key = "1e6af43b1699f8cbaa03a3bda0ae5290";
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city_name 
+ "&units=metric&appid=" + api_key;
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var jsonArr = JSON.parse(xhttp.responseText);
        var city_name = jsonArr.name;
        var country_name = jsonArr.sys.country;
        document.getElementById("location").innerHTML = city_name + ", " + country_name;
        document.getElementById("temperature").innerHTML = jsonArr.main.temp + " °C";
    }
};
xhttp.open('GET',url,true);
xhttp.send();
}

