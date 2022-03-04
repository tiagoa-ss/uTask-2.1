import './style.css'

export function Modal({ id = 'modal', onClose = () => {} }) {
	function closeModal(e) {
		if (e.target.id === id) {
			onClose()
		}
	}

	function switchTheme(e) {
		document.body.classList.toggle('dark')
		document.querySelector('.modal').classList.toggle('dark')
	}

	function changeBackground(e) {
		e.preventDefault()
		const inputBack = document.querySelector('#input-back')
		const imageUrl = inputBack.value

		document.body.style.backgroundImage = `url('${imageUrl}')`

		inputBack.value = ''
		onClose()
	}

	function cleanBackground(e) {
		e.preventDefault()
		document.body.style.backgroundImage = ''
		onClose()
	}

	return (
		<div id={id} className='modal-container' onClick={closeModal}>
			<div className='modal'>
				<h2 id='modal-h2'>Configuração</h2>
				<div id='dark-mode'>
					<p>Dark Mode</p>
					<label className='switch'>
						<input type='checkbox' id='btn-theme' onChange={switchTheme} />
						<span className='slider round'></span>
					</label>
				</div>
				<div id='change-back'>
					<p>Plano de Fundo</p>
					<form>
						<input type='text' id='input-back' />
						<div className='buttons'>
							<button id='branco' onClick={cleanBackground}>
								Limpar
							</button>
							<button type='submit' id='azul' onClick={changeBackground}>
								Aplicar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
