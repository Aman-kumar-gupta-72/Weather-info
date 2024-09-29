const apikey=  '1fe2c6dc3dd50e31ac09d2bc7a7ce79b';
const weatherDataEl= document.getElementById("weather-data")
const cityInpute = document.getElementById("City-input")
const formEl= document.querySelector('form')

   formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
   
    const cityValue=cityInpute.value;
    
    getWeatherData(cityValue)
})
 async function getWeatherData(cityValue){
    try {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`) 
       
        if(!response.ok){
            throw new Error(' Network response in not ok')
        }
        const data= await response.json()
        console.log(data);
        
        const temrature = Math.round(data.main.temp);

        const description = data.weather[0].description;

        const icon =data.weather[0].icon;

        const details= [
            `Feels like :${Math.round(data.main.feels_like)}`,
            `Humidity:${Math.round(data.main.humidity)}`,
            `Wind:${Math.round(data.wind.speed)}`,
            
        ]
        weatherDataEl.querySelector(".icon").innerHTML=`<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
        document.querySelector(".temprature").innerHTML= `${temrature}°C`;
        weatherDataEl.querySelector(".description").textContent=description;
        weatherDataEl.querySelector(".details").innerHTML=details.map((detail)=>`<div>${detail}</div>`)
        .join("")
    } catch (error) {
        console.log("error howe");
    }
}
