console.log('Client js')

const add = document.querySelector('#location')
const form = document.querySelector('form')
const locate = document.querySelector('#locationDetailer')
const tempdl = document.querySelector('#tempDetailer')

form.addEventListener('submit', (e)=>{ 
    e.preventDefault()
    address = add.value
    fetch('/weather?address='+address).then((response)=>{
        response.json().then((data)=>{
            const addr = address
            const uppercasefirstletter = addr.charAt(0).toUpperCase()+addr.slice(1)
            locate.textContent = uppercasefirstletter
            tempdl.textContent = data.temp
            console.log(data.temp)
        })
    })
})

