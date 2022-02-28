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
				// console.log(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

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
									<button>
										<img
											src={rightArrow}
											alt='Botão de mover uma tarefa para doing azul'
										/>
									</button>
									<button id='delete'>
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
									<button>
										<img
											src={checkMark}
											alt='Botão de mover uma tarefa para done verde'
										/>
									</button>
									<button id='delete'>
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
									<button>
										<img
											src={returnIcon}
											alt='Botão de mover uma tarefa para to do preto'
										/>
									</button>
									<button id='delete'>
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
