console.log('Client js')

const add = document.querySelector('input')
const form = document.querySelector('form')
const p = document.querySelector('p')
p.textContent = 'Enter City Name to get the Temperature'

form.addEventListener('submit', (e)=>{ 
    e.preventDefault()
    address = add.value
    fetch('/weather?address='+address).then((response)=>{
        response.json().then((data)=>{
            p.textContent = 'Cuurently it is '+data.temp+' Degree Celcius in '+address
            console.log(data.temp)
        })
    })
})

