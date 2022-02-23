import './style.css'

export function Button(props) {
	return (
		<button id={props.id} type={props.type}>
			{props.children}
		</button>
	)
}
