const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'Hello' })
})

app.listen(3300)
