const express= require('express')
const app = express()
const port = process.env.PORT || 3000
const weatherFunction = require('./forecast')
const path = require('path')
const mainDirectory = path.join(__dirname,'./www')
const viewsDirectory =path.join(__dirname, './views')

app.set('view engine', 'hbs')
app.set('views', viewsDirectory)
app.use(express.static(mainDirectory))
app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/weather', (req, res)=>{
     if(!req.query.address)
     {
         res.send({error : 'you must provide address'})
     }
     else
     {
        weatherFunction(req.query.address, (error, {temp})=>{
            if(error)
            {
                res.send({error})
            }
            else
            {
                res.send({temp: temp})


                }
            })
        }
     }
     
)






app.listen(port , ()=>{
    console.log("server is running on port no . 3000")
})