/**
 * Check whether the SIN provided has 9 digits and
 * if its checksum is correct.
 * 
 * @param sin the SIN to be checked
 * @returns whether the SIN is valid
 */
export function isValidSin(sin: string) {
	return sin.length == 9 && verifyChecksum(sin);
}

/**
 * Validate the checksum of the SIN provided.
 * 
 * @param sin the SIN to be checked
 * @returns whether the checksum is valid
 */
export function verifyChecksum(sin: string) {
	let doubled = double(sin);
	// SIN provided not a number
	if (doubled.length == 0) {
		return false;
	}
	let checksum = doubled.reduce((a, b) => a + b, 0);
	return checksum % 10 == 0;
}

/**
 * Double every alternate digit in the SIN starting with the second digit. 
 * 
 * @param sin The SIN to be double.
 * @returns A digit array after doubling, or an empty array if the SIN is
 * not a number.
 */
export function double(sin: string) {
	let output = new Array<number>();
	for (let i = 0; i < sin.length; i++) {
		let value = parseInt(sin.charAt(i));
		// Invalid SIN, return empty array
		if (isNaN(value)) {
			return [];
		}
		// Even position, digit remain unchanged
		if (i % 2 == 0) {				
			output.push(value);
		}
		// Odd position, double the digit
		else {
			let doubled = value * 2;
			// If the number has 2 digits, extract the first one and push to array
			if (doubled > 9) output.push(Math.floor(doubled / 10) % 10);
			// Push the last digit to array
			output.push(doubled % 10);
		}
	}

	return output;
}