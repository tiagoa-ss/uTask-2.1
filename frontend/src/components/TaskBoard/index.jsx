import axios from 'axios'
import { useState, useEffect } from 'react'

import './style.css'

import rightArrow from '../../assets/right-arrow.svg'
import deleteIcon from '../../assets/delete.svg'
import checkMark from '../../assets/check-mark.svg'
import returnIcon from '../../assets/return.svg'

export function TaskBoard(props) {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:3003/task')
			.then((res) => {
				setTasks(res.data)
			})
			.catch((err) => console.log(err))
	}, [{ tasks }])

	function category1to2(e) {
		const id = e.target.parentElement.id
		axios
			.patch(`http://localhost:3003/task/${id}`, { category: 2 })
			.then(() => {
				console.log('Categoria alterada com sucesso')
			})
			.catch((err) => console.log(err))
	}

	function category2to3(e) {
		const id = e.target.parentElement.id
		axios
			.patch(`http://localhost:3003/task/${id}`, { category: 3 })
			.then(() => {
				console.log('Categoria alterada com sucesso')
			})
			.catch((err) => console.log(err))
	}

	function category3to1(e) {
		const id = e.target.parentElement.id
		axios
			.patch(`http://localhost:3003/task/${id}`, { category: 1 })
			.then(() => {
				console.log('Categoria alterada com sucesso')
			})
			.catch((err) => console.log(err))
	}

	function deleteTask(e) {
		const id = e.target.parentElement.id
		axios
			.delete(`http://localhost:3003/task/${id}`)
			.then(() => {
				console.log('Tarefa deletada com sucesso')
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<section className='tarefas'>
			<h2>{props.title}</h2>
			<ul className='tarefas-todo' id={props.id}>
				{tasks.map((task) => {
					if (props.title === 'To do' && task.category === 1) {
						return (
							<li className='todo-item' key={task._id}>
								<p>{task.title}</p>
								<div className='todo-icons'>
									<button onClick={category1to2} id={task._id}>
										<img
											src={rightArrow}
											alt='Botão de mover uma tarefa para doing azul'
										/>
									</button>
									<button onClick={deleteTask} id={task._id}>
										<img
											src={deleteIcon}
											alt='Botão de deletar uma tarefa vermelho'
										/>
									</button>
								</div>
							</li>
						)
					} else if (props.title === 'Doing' && task.category === 2) {
						return (
							<li className='todo-item' key={task._id}>
								<p>{task.title}</p>
								<div className='todo-icons'>
									<button onClick={category2to3} id={task._id}>
										<img
											src={checkMark}
											alt='Botão de mover uma tarefa para done verde'
										/>
									</button>
									<button onClick={deleteTask} id={task._id}>
										<img
											src={deleteIcon}
											alt='Botão de deletar uma tarefa vermelho'
										/>
									</button>
								</div>
							</li>
						)
					} else if (props.title === 'Done' && task.category === 3) {
						return (
							<li className='todo-item' key={task._id}>
								<p>{task.title}</p>
								<div className='todo-icons'>
									<button onClick={category3to1} id={task._id}>
										<img
											src={returnIcon}
											alt='Botão de mover uma tarefa para to do preto'
										/>
									</button>
									<button onClick={deleteTask} id={task._id}>
										<img
											src={deleteIcon}
											alt='Botão de deletar uma tarefa vermelho'
										/>
									</button>
								</div>
							</li>
						)
					}
				})}
			</ul>
		</section>
	)
}
