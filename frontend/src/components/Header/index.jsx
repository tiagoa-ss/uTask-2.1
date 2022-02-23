import blueLogo from '../../assets/blue-logo.svg'
import blueGear from '../../assets/blue-gear.svg'

import './style.css'
import { Button } from '../Button'

export function Header() {
	return (
		<header>
			<img src={blueLogo} alt='Logo UnectJr azul' />
			<h1>
				uTask <span>2.0</span>
			</h1>
			<Button id='engrenagem'>
				<img src={blueGear} alt='Engrenagem azul' />
			</Button>
		</header>
	)
}
