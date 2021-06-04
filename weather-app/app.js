const request=require('request')
const url=''

request({url:url,json:true}, (error,response)=>{
    const resp=response.body.current
    console.log(resp.weather_descriptions[0] + `. It is currently ${resp.temperature} degrees out. There is a ${resp.feelslike}% degree out.`)
    
})

//Geocoding service-takes the address and turns into a long and latitude
