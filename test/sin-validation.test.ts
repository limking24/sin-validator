import { assert } from 'chai'
import { double, isValidSin, verifyChecksum } from '../src/sin-validation'

describe('double() - Double every alternate digit', () => {

	it('Valid SIN provided', () => assert.deepEqual(double('046454286'), [0, 8, 6, 8, 5, 8, 2, 1, 6, 6]));
	it('Valid SIN provided #2', () => assert.deepEqual(double('157565397'), [1, 1, 0, 7, 1, 0, 6, 1, 0, 3, 1, 8, 7]));
	it('Invalid SIN provided', () => assert.deepEqual(double('04645428d'), []));

});

describe('verifyChecksum() - Verify checksum by seeing whether it\'s divisible by 10', () => {
	it('Valid checksum', () => assert.isTrue(verifyChecksum('046454286')));
	it('Invalid checksum', () => assert.isFalse(verifyChecksum('046454296')));
	it('SIN not a number', () => assert.isFalse(verifyChecksum('046454286d')));
});

describe('isValidSin() - Check if the SIN is 9-digit long and has a valid checksum', () => {
	it('8-digit SIN', () => assert.isFalse(isValidSin('04645428')));
	it('valid, 9-digit SIN', () => assert.isTrue(isValidSin('046454286')));
	it('invalid, 9-digit SIN', () => assert.isFalse(isValidSin('046454296')));
	it('10-digit SIN', () => assert.isFalse(isValidSin('0464542860')));
});