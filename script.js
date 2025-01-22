




const inputE= document.querySelector("input");
console.log(inputE.value);

const searchE= document.querySelector(".searchitems img");
const apiKey="24243192071c5bf5c3db3310b19481b3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function fetchData(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    const data= await response.json();
    document.querySelector(".cityname").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ " %";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

    if(data.weather[0].main=="Clouds"){
        document.querySelector(".cloud").src="images/cloud.webp"
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector(".cloud").src="images/clear.webp"
        
    }

    else if(data.weather[0].main=="Rain"){
        document.querySelector(".cloud").src="images/rain.webp"
        
    }

    else if(data.weather[0].main=="Mist"){
        document.querySelector(".cloud").src="images/mist.webp"
        
    }
    
}

searchE.addEventListener("click",()=>{
    fetchData(inputE.value);
    
    
})

