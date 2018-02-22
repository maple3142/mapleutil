import assert from 'assert'
import { common } from '../'

function arrComp(ar1, ar2) {
	if (ar1.length !== ar2.length) return false
	for (let i = 0; i < ar1.length; i++) {
		if (ar1[i] !== ar2[i]) return false
	}
	return true
}
describe('common', function() {
	it('random', function() {
		for (let i = 0; i < 1000; i++) {
			const x = common.random(1, 10)
			assert(x >= 1 && x < 10)
		}
	})
	it('getPermutation #1: default length', function() {
		const arr = [1, 2, 3, 4, 5]
		let prev = []
		for (let x of common.getPermutation(arr)) {
			assert(arrComp(x, prev) === false)
			prev = x
		}
	})
	it('getPermutation #2: custom length', function() {
		const arr = [1, 2, 3, 4, 5]
		let prev = []
		for (let x of common.getPermutation(arr, 3)) {
			assert(x.length === 3)
			assert(arrComp(x, prev) === false)
			prev = x
		}
	})
})
