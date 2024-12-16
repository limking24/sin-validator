import { useEffect, useState } from 'react'
import './App.css'
import Numpad from './components/Numpad'
import Input from './components/Input'
import { isValidSin } from './sin-validation'

enum State {
	EMPTY,
	VALID,
	INVALID
}

function App() {
	const [sin, setSin] = useState('');
	const [state, setState] = useState(State.EMPTY);

	// Callbacks
	const addDigit = (digit: string) => setSin((sin) => sin + digit);
	const removeLastDigit = () => setSin((sin) => sin.substring(0, sin.length - 1));
	const clear = () => setSin('');

	// 0-9, backspace, delete keys handler
	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Backspace') {
			removeLastDigit();
		} else if (e.key == 'Delete') {
			clear();
		} else if (!isNaN(parseInt(e.key))) {
			addDigit(e.key);
		}
	};

	// Register key event listener
	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	});

	// On SIN change, validate it and update message
	useEffect(() => {
		let id: NodeJS.Timeout | undefined;
		// Empty input, no need for validation. Reset message
		if (sin == '') {
			setState(State.EMPTY);
			clearTimeout(id);
		} else {
			// Short delay before validation
			id = setTimeout(() => setState(isValidSin(sin) ? State.VALID : State.INVALID), 500);
		}
		return () => clearTimeout(id);
	}, [sin]);

	return (
		<>
			<div className={`message ${state == State.INVALID ? 'invalid' : ''}`}>
				{
					{
						[State.EMPTY]: 'Enter SIN Number',
						[State.VALID]: 'SIN Number Is Valid',
						[State.INVALID]: 'SIN Number Is Invalid'
					}[state]
				}
			</div>
			<Input value={sin}/>
			<Numpad onAddDigit={addDigit} onBackspace={removeLastDigit} onClear={clear} />
		</>
	)
}

export default App
