const router = require('express').Router()

const Task = require('../models/Task')

router.get('/', async (req, res) => {
	try {
		const tasks = await Task.find()

		res.status(200).json(tasks)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
