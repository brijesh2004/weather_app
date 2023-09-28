let inside_weather = document.getElementById("inside_weather");
let temperatur = document.getElementById("temperatur");
let min_temp = document.getElementById("min_temp");
let max_temp = document.getElementById("max_temp");
let humidity = document.getElementById("humidity");
let speed = document.getElementById("speed");
let city_name = document.getElementById("city_name");
let search_btn = document.getElementById("search_btn");
let country_name = document.getElementById("country_name");
let description = document.getElementById("description");
let today_date = document.getElementById("today_date");
let today_day = document.getElementById("today_date");
let city;
const getWeather = async ()=>{
    try{
        let select_degree = document.getElementById("select_degree");
       city= document.getElementById('search_input').value;
       console.log(select_degree.value);
        search_btn.innerHTML="Getting data..."
       const weatherdata =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=676ca47c6dd5253600058fb26b3f8490`);
       const data = await weatherdata.json();
       city_name.innerHTML=data.name;
       if(select_degree.value == "celsius"){
        temperatur.innerHTML=data.main.temp+"°C";
        min_temp.innerHTML=data.main.temp_min+"°C";
        max_temp.innerHTML=data.main.temp_max+"°C";
       }
       else{
        temperatur.innerHTML=((data.main.temp * 9/5) + 32).toFixed(3)+"°F";
        min_temp.innerHTML=((data.main.temp_min * 9/5) + 32).toFixed(3)+"°F";
        max_temp.innerHTML=((data.main.temp_max * 9/5) + 32).toFixed(3)+"°F";
       }
       
       country_name.innerHTML=data.sys.country;
       humidity.innerHTML= data.main.humidity;
       speed.innerHTML=data.wind.speed;
       inside_weather.style.display="block";
       search_btn.innerHTML="Get Weather";
       description.innerHTML=data.weather[0].description;
       let erro = document.getElementById('error');
       erro.innerHTML="";
    }
    catch(error){
        let erro = document.getElementById('error');
        erro.innerHTML="Please check the City name or Zip code"
        search_btn.innerHTML="Get Weather";
        inside_weather.style.display="none";
        // search_btn.innerHTML="Error";
    }
}


const changetheTemp = async ()=>{
    const weatherdata =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=676ca47c6dd5253600058fb26b3f8490`);
    const data = await weatherdata.json();
    city_name.innerHTML=data.name;
    if(select_degree.value == "celsius"){
     temperatur.innerHTML=data.main.temp+"°C";
     min_temp.innerHTML=data.main.temp_min+"°C";
     max_temp.innerHTML=data.main.temp_max+"°C";
    }
    else{
        temperatur.innerHTML=((data.main.temp * 9/5) + 32).toFixed(3)+"°F";
        min_temp.innerHTML=((data.main.temp_min * 9/5) + 32).toFixed(3)+"°F";
        max_temp.innerHTML=((data.main.temp_max * 9/5) + 32).toFixed(3)+"°F";
    }
}

