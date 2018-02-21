import assert from 'assert'
import { node } from '../'

describe('node', function() {
	it('readStream', function() {
		const { Readable } = require('stream')
		const s = new Readable()
		s._read = function() {}
		s.push('hello')
		s.push(' world')
		s.push(null)
		return node.readStream(s).then(r => assert(r === 'hello world'))
	})
})
