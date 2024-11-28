document.querySelector('button').addEventListener('click', apiRequest)
console.log("Im connected")

async function apiRequest(event){
    console.log(`Button was pressed`)
    event.preventDefault();
    console.log(`Button was pressed`)
    const rapperName = document.querySelector('input').value.toLowerCase()
    console.log(`Rapper name is ${rapperName}`)
    try{
        // const response = await fetch(`localhost:3000/api/${rapperName}`)

        const response = await fetch(`https://rap-names-api-dd4y.onrender.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}