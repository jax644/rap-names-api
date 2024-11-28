// run an api request when a form submission occurs (via button click or enter keystroke)
document.querySelector('form').addEventListener('submit', apiRequest)


// fetch data from the api and make changes to the DOM accordingly
async function apiRequest(event){
    // prevent refresh
    event.preventDefault();

    // get the searched rapper name from the form (case-insensitive)
    const rapperName = document.getElementById('rapperInput').value.toLowerCase()

    try{
        // search the api for data associated with the searched name
        const response = await fetch(`https://rap-names-api-dd4y.onrender.com/api/${rapperName}`)

        // comment out the response and uncomment this to test locally 
            // const response = await fetch(`http://localhost:3000/api/${rapperName}`)
            
        // get the rapper details as json
        const data = await response.json()
        // replace the h2 with the birth name
        document.querySelector('h2').innerText = data.birthName
    // throw an error if the fetch is unsuccessful
    }catch(error){
        console.log(error)
    }
}