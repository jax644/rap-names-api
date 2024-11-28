// import and use express
const express = require('express')
const app = express()

// import and use CORS (cross-origin resource sharing) so that the API can handle requests from other origins (like Heroku or Render)
const cors = require('cors')
app.use(cors())


// specify the local port for the server to listen on
const PORT = 3000;

// tell the server to automatically serve files in this directory (so that main.js will work)
app.use(express.static('public'));


// data to be served
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

// at the root endpoint, serve index.html from our current directory
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

// at the /api endpoint, send all rapper data
app.get('/api', (req,res) => {
    res.json(rappers)
})

// at the endoint '/api/[any given rapper name],
// look for that name in our data, and if it exists, and serve the rapper details as a json object
app.get('/api/:rapperName', (req,res) => {
    const rapperName = req.params.rapperName.toLowerCase()
    if(rappers[rapperName]) {
        res.json(rappers[rapperName])
    } else {
        res.status(404).send('Rapper not found')
    } 
})


// set up the server to listen at the port specified above, or the port in our .env file
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})