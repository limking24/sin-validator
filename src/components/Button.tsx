import './Button.css'

interface Props {
	value: string,
	onPress?: (value: string) => void
}

export default function Button({value, onPress}: Props) {
	return (
		<>
			<input
				className="digit-button"
				type="button"
				value={value} 
				onClick={() => { if (onPress) onPress(value)}} />
		</>
	)
}
