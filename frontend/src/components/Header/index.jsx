import blueLogo from '../../assets/blue-logo.svg'
import blueGear from '../../assets/blue-gear.svg'

import './style.css'

export function Header({ action }) {
	return (
		<header>
			<img src={blueLogo} alt='Logo UnectJr azul' />
			<h1>
				uTask <span>2.0</span>
			</h1>
			<button id='engrenagem' onClick={action}>
				<img src={blueGear} alt='Engrenagem azul' />
			</button>
		</header>
	)
}
