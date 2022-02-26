const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
	title: String,
	category: Number,
})

module.exports = Task
