const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const contacts =[
	{name:'Andrés', phone:'3132255512'},
	{name:'Laura', phone:'3185215231'}
];

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/contacts', (req, res) => {
	res.send(contacts)
})

app.post('/contacts/add', (req, res) => {
	contacts.push({name:req.body.name , phone: req.body.phone})
	res.send('Añadido')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

