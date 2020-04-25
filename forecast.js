const request = require('request')
const weatherfuntion = (Location, callback)=>
{
    const weatherstack = 'http://api.weatherstack.com/current?access_key=d0cf158aed30cf02ec82e542225816f6&query='+Location
    request({url : weatherstack, json : true}, (err, res)=>{
        if(err)
        {
            callback('Network is not available',  undefined)
        }
        else if(res.body.error)
        {
            callback('Location is not available', undefined)
           // console.log(res.body.error)
        }
        else
        {
            callback(undefined, {temp : res.body.current.temperature})
        }
    })
}
 module.exports = weatherfuntion;

