const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000;

app.use(cors())
app.use(express.static(__dirname));



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


app.get('/api', (req,res) => {
    res.json(rappers)
})

app.get('/api/:rapperName', (req,res) => {
    const rapperName = req.params.rapperName.toLowerCase()
    if(rappers[rapperName]) {
        res.json(rappers[rapperName])
    } else {
        res.status(404).send('Rapper not found')
    } 
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})