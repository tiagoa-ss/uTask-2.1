import { Button } from '../Button'
import './style.css'

import blackPlus from '../../assets/black-plus.svg'

export function TaskForm() {
	return (
		<div className='input-area'>
			<form>
				<input type='text' placeholder='Adicionar tarefa...' />
				<Button type='submit' id='add-tarefa'>
					<img
						src={blackPlus}
						alt='Botão de adicionar uma tarefa preto'
						id='btn-plus'
					/>
				</Button>
			</form>
		</div>
	)
}
