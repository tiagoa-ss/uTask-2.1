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
			.catch((err) => {
				console.log(err)
			})
	}, [])

	function handleCategory() {}

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
									<a href={`/task/${task._id}`}>
										<img
											src={rightArrow}
											alt='Botão de mover uma tarefa para doing azul'
										/>
									</a>
									<a id='delete'>
										<img
											src={deleteIcon}
											alt='Botão de deletar uma tarefa vermelho'
										/>
									</a>
								</div>
							</li>
						)
					} else if (props.title === 'Doing' && task.category === 2) {
						return (
							<li className='todo-item' key={task._id}>
								<p>{task.title}</p>
								<div className='todo-icons'>
									<a href={`/task/${task._id}`}>
										<img
											src={checkMark}
											alt='Botão de mover uma tarefa para done verde'
										/>
									</a>
									<a id='delete'>
										<img
											src={deleteIcon}
											alt='Botão de deletar uma tarefa vermelho'
										/>
									</a>
								</div>
							</li>
						)
					} else if (props.title === 'Done' && task.category === 3) {
						return (
							<li className='todo-item' key={task._id}>
								<p>{task.title}</p>
								<div className='todo-icons'>
									<a href={`/task/${task._id}`}>
										<img
											src={returnIcon}
											alt='Botão de mover uma tarefa para to do preto'
										/>
									</a>
									<a id='delete'>
										<img
											src={deleteIcon}
											alt='Botão de deletar uma tarefa vermelho'
										/>
									</a>
								</div>
							</li>
						)
					}
				})}
			</ul>
		</section>
	)
}
