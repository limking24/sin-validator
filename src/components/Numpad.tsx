import Button from './Button'
import './Numpad.css'

interface Props {
	onAddDigit: (digit: string) => void,
	onBackspace: () => void,
	onClear: () => void
}

export default function Numpad({onAddDigit, onBackspace, onClear}: Props) {
	return (
		<>
			<div className="numpad">
				{/* Show button 1 - 9 */}
				{Array.from(Array(9), (_e, i) => {
					return <div key={i}><Button value={String(i + 1)} onPress={onAddDigit}/></div>
				})}
				<div><Button value={"CLR"} onPress={onClear}/></div>
				<div><Button value={"0"} onPress={onAddDigit}/></div>
				<div><Button value={"←"} onPress={onBackspace}/></div>
			</div>
		</>
	);
}