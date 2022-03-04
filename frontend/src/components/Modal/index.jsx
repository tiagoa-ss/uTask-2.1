import './style.css'

export function Modal({ id = 'modal', onClose = () => {} }) {
	function closeModal(e) {
		if (e.target.id === id) {
			onClose()
		}
	}

	function switchTheme(e) {
		document.body.classList.toggle('dark')
	}

	return (
		<div id={id} className='modal-container' onClick={closeModal}>
			<div className='modal'>
				<h2 id='modal-h2'>Configuração</h2>
				<div id='dark-mode'>
					<p>Dark Mode</p>
					<label className='switch'>
						<input type='checkbox' id='btn-theme' onClick={switchTheme} />
						<span className='slider round'></span>
					</label>
				</div>
				<div id='change-back'>
					<p>Plano de Fundo</p>
					<form>
						<input type='text' id='input-back' />
						<div className='buttons'>
							<button id='branco'>Limpar</button>
							<button type='submit' id='azul'>
								Aplicar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
