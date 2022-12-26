const express = require('express')
const app = express()
const PORT = 8000

let elements = {
    'hydrogen': {
        'name': 'hydrogen',
        'symbol': 'H',
        'atomic mass': 1.0080
    }
}

app.get('/api/:element', (req, res) => {
    const elementName = req.params.element.toLocaleLowerCase()
    if(elements[elementName]){
        res.json(elements[elementName])
    }
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})