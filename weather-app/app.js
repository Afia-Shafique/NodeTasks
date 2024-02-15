const request= require("request");
const url = 'http://api.weatherstack.com/current?access_key=43d87436e03553a9b02534dd74371807&query=31.5204,74.3587'

request(url, {json:true},(err, res) =>{
console.log("It is currently " + res.body.current.temperature + " degrees")
console.log("There are "+ res.body.current.precip + "percent chances of rain")
})