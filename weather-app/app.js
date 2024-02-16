const request= require("request");
const axios = require("axios");

axios
    .get("http://api.weatherstack.com/current?access_key=43d87436e03553a9b02534dd74371807&query=31.5204,74.3587")

    .then((response) => {
        console.log("Temperature is "+ response.data.current.temperature)
        const rain=response.data.current.precip;
console.log("There are "+ rain +"% chances of rain")
}
)
    .catch((error) => console.log("There is an error in getting data "+ error));

const geoCodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWZpYS1zaGFmaXF1ZSIsImEiOiJjbHNuZDFwMmQwM2YyMmxrNTU2MHRxdDJ5In0.22pbA4TMsdpH8e0KQQmkdw'

request(geoCodeUrl, {json:true} ,(error,response)=>{
const longitude=response.body.features[0].center[0];
console.log("Longitude is: "+ longitude +" degrees");
console.log("Latitude is " + response.body.features[0].center[1] + " degrees")
}
)