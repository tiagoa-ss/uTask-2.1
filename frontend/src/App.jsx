import { useState } from 'react'

import { Modal } from './components/Modal'
import { Header } from './components/Header'
import { TaskBoard } from './components/TaskBoard'
import { TaskForm } from './components/TaskForm'

function App() {
	const [modalOpen, setModalOpen] = useState(false)

	function handleModal() {
		setModalOpen(true)
	}

	return (
		<>
			<Header action={handleModal} />
			<TaskForm />
			<div className='todos'>
				<TaskBoard title='To do' />
				<TaskBoard title='Doing' />
				<TaskBoard title='Done' />
			</div>
			{modalOpen ? (
				<Modal
					id='modal'
					onClose={() => {
						setModalOpen(false)
					}}></Modal>
			) : null}
		</>
	)
}

export default App
