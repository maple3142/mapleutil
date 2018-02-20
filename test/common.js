import assert from 'assert'
import { common } from '../'

describe('common', function() {
	it('random', function() {
		for (let i = 0; i < 100; i++) {
			const x = common.random(1, 10)
			assert(x >= 1 && x < 10)
		}
	})
})
