const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'Hello' })
})

const taskRoutes = require('./routes/taskRoutes')
app.use('/task', taskRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose
	.connect(
		`mongodb+srv://${DB_USER}:${DB_PASSWORD}@utaskcluster.vjcq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
	)
	.then(() => {
		console.log('App rodando')
		app.listen(3003)
	})
	.catch((error) => console.log(error))

app.listen(8800)
