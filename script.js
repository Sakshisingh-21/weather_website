let loc=document.getElementById("location");
let tempicon= document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");

let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");


searchButton.addEventListener('click',(e)=> 

{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';



});

const getWeather=async(city)=>
{
  try{
    
     
      const api_key="049584f6099e9400d2ee01cbfa986585"
 const Res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
 {mode: 'cors'}

  
 );



const weatherData=await Res.json()
console.log(weatherData);
const{name}=weatherData;

const{feels_like}=weatherData.main;
const{id,main}=weatherData.weather[0];

loc.textContent=name;
climate.textContent=main;
tempvalue.textContent=Math.round(feels_like-273);


if(id<300&&id>200)
{
   tempicon.src="icon/thunderstrom.png"
}

 else if(id<400&&id>300)
{
   tempicon.src="icon/cloud.png"
}


else if(id<600&&id>500)
{
   tempicon.src="icon/rainy.png"
}

else if(id<700&&id>600)
{
   tempicon.src="icon/snow.png"
}
else if(id<800&&id>700)
{
   tempicon.src="icon/atmosphere.png"
}
 else if(id==800)
{
   tempicon.src="icon/clear.png"
}

  }
catch(error)
{

   alert('city not found');
}

};

window.addEventListener("load",()=>{



    let long;
    let lat;

    if(navigator.geolocation)
   {   
navigator.geolocation.getCurrentPosition((position)=>
{
long=position.coords.longitude;
lat=position.coords.latitude;
const proxy= "https://cors-anywhere.herokuapp.com/";


 const api_key="049584f6099e9400d2ee01cbfa986585";

const api=`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`

fetch(api).then((Res)=>{
    //console.log(Res);
 return Res.json(Res);

})

.then(data=>
   {

const{name}=data;
const{feels_like}=data.main;
const{id,main}=data.weather[0];


    loc.textContent=name;
   climate.textContent=main;
    tempvalue.textContent=Math.round(feels_like-273);
    

if(id<300&&id>200)
{
   tempicon.src="icon/thunderstrom.png"
}

 else if(id<400&&id>300)
{
   tempicon.src="icon/cloud.png"
}


else if(id<600&&id>500)
{
   tempicon.src="icon/rainy.png"
}

else if(id<700&&id>600)
{
   tempicon.src="icon/snow.png"
}
else if(id<800&&id>700)
{
   tempicon.src="icon/atmosphere.png"
}
 else if(id==800)
{
   tempicon.src="icon/clear.png"
}

    console.log(data);

   })
      

})

   }
})