import './style.css'

export function TaskBoard(props) {
	return (
		<section className='tarefas'>
			<h2>{props.title}</h2>
			<ul className='tarefas-todo' id={props.id}>
				{/* <li class="todo-item">
					    <p>t1</p>
						<div class="todo-icons">
							<button>
								<img src="./assets/right-arrow.svg" alt="Botão de mover uma tarefa para doing azul" />
							</button>
							<button id="delete">
								<img src="./assets/delete.svg" alt="Botão de deletar uma tarefa vermelho" />
							</button>
						</div>
					</li> */}
			</ul>
		</section>
	)
}
