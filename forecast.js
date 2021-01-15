const request = require('request')
const weatherfuntion = async(location, callback)=>
{
    const weatherUri = 'http://api.weatherstack.com/current?access_key=d0cf158aed30cf02ec82e542225816f6&query='+location
    try {
        const weatherDetails = await fetch(weatherUri)
    } catch (error) {
        console.log('Network Unavailable '+error)
        var msg = 'Network Error'
    }
    if(res.body.error)
    {
        console.log('Location is not available')
         msg = 'location is not available'
        return;
    }
    return {Error:msg , temp:res.body.current.temperature }
}
    
    // request({url : weatherstack, json : true}, (err, res)=>{
    //     if(err)
    //     {
    //         callback('Network is not available',  undefined)
    //     }
    //     else if(res.body.error)
    //     {
    //         callback('location is not available', undefined)
    //        // console.log(res.body.error)
    //     }
    //     else
    //     {
    //         callback(undefined, {temp : res.body.current.temperature})
    //     }
    // })

 module.exports = weatherfuntion;

