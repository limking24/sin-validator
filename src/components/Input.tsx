import './Input.css'

interface Props {
	value: string
}

export default function Input({value}: Props) {
	return (
		<>
			<input className="input" type="text" value={value} readOnly />
		</>
	)
}