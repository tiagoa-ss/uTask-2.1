import { Header } from './components/Header'
import { TaskBoard } from './components/TaskBoard'
import { TaskForm } from './components/TaskForm'

function App() {
	return (
		<>
			<Header />
			<TaskForm />
			<div className='todos'>
				<TaskBoard title='To do' />
				<TaskBoard title='Doing' />
				<TaskBoard title='Done' />
			</div>
		</>
	)
}

export default App
