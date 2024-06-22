const apiKey="99169298578ae1af2748273fef3c139e" ;
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const img = document.querySelector(".weather img");
const error = document.querySelector(".error");



async function checkWeather(city){
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status== 404){
        document.querySelector(".error").style.display="block";
    }else if(response.status!= 404){
        document.querySelector(".error").style.display="none";
    }
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
   

    if(data.weather[0].main == "Clear"){
        img.setAttribute("src","./images/clear.png");

    }

    else if(data.weather[0].main == "Clouds"){
        img.setAttribute("src","./images/clouds.png");

    }

    else if(data.weather[0].main == "Drizzle"){
        img.setAttribute("src","./images/drizzle.png");

    }

    else if(data.weather[0].main == "Humidity"){
        img.setAttribute("src","./images/humidity.png");

    }

    else if(data.weather[0].main == "Mist"){
        img.setAttribute("src","./images/mist.png");

    }

    else if(data.weather[0].main == "Snow"){
        img.setAttribute("src","./images/snow.png");

    }

    else if(data.weather[0].main == "Wind"){
        img.setAttribute("src","./images/wind.png");

    }
    document.querySelector(".weather").style.display="block";


    searchBox.value="";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    
})

