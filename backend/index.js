const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'Hello' })
})

const taskRoutes = require('./routes/taskRoutes')
app.use('/task', taskRoutes)

mongoose
	.connect(
		'mongodb+srv://tiagoa-ss:tIag0000@utaskcluster.vjcq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	)
	.then(() => {
		console.log('App rodando')
		app.listen(3003)
	})
	.catch((error) => console.log(error))

app.listen(8800)
