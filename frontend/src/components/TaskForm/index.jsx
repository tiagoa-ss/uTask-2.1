import { useState, useEffect } from 'react'
import axios from 'axios'

import './style.css'
import blackPlus from '../../assets/black-plus.svg'

export function TaskForm() {
	useEffect(() => {
		const button = document.querySelector('button[type="submit"]')
		const inputField = document.querySelector('input[type="text"]')

		button.addEventListener('click', (e) => {
			e.preventDefault()

			if (!inputField.value) {
				alert('Digite algo no input')
				return
			}

			axios
				.post('http://localhost:3003/task', {
					title: `${inputField.value}`,
					category: 1,
				})
				.then(() => {
					console.log('Pessoa adicionada com sucesso')
				})
				.catch((err) => console.log(err))

			inputField.value = ''
		})
	}, [])

	return (
		<div className='input-area'>
			<form>
				<input type='text' placeholder='Adicionar tarefa...' />
				<button type='submit' id='add-tarefa'>
					<img
						src={blackPlus}
						alt='Botão de adicionar uma tarefa preto'
						id='btn-plus'
					/>
				</button>
			</form>
		</div>
	)
}
