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

router.post('/', async (req, res) => {
	const { title, category } = req.body

	const task = {
		title,
		category,
	}

	try {
		await Task.create(task)
		res.status(200).json({ message: 'Task succesfully added!' })
	} catch (error) {
		res.status(500).json({ error: error })
	}
})

router.patch('/:id', async (req, res) => {
	const { id } = req.params
	const { category } = req.body

	const task = {
		category,
	}

	try {
		const updatedTask = await Task.updateOne({ _id: id }, task)

		if (updatedTask.matchedCount === 0) {
			res.status(500).json({ message: 'No row affected' })
			return
		}

		res.status(200).json({ message: 'Task succesfully updated!' })
	} catch (error) {
		res.status(500).json({ error: error })
	}
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params

	try {
		const deletedTask = await Task.deleteOne({ _id: id })

		if (deletedTask.deletedCount === 0) {
			res.status(500).json({ message: 'No row affected' })
			return
		}

		res.status(200).json({ message: 'One task has been deleted' })
	} catch (error) {
		res.status(500).json({ error: error })
	}
})

module.exports = router
