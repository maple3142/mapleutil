import { isEqual } from 'lodash'
import assert from 'assert'
import { browser } from '../'

describe('browser', function() {
	it('loadCSS', function() {
		return browser
			.loadCSS('data:text/css;charset=utf-8;base64,Ly90ZXh0IGNzcw==')
			.then(el => assert(el === document.querySelector('link')))
	})
	it('loadJS', function() {
		return browser
			.loadJS('data:text/javascript;charset=utf-8;base64,Ly90ZXN0IHNjcmlwdA==')
			.then(el => assert(el === document.querySelector('script')))
	})
	it('loadIMG', function() {
		return browser.loadIMG(
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
		)
	})
	it('StorageWrapper #1: localStorage', function() {
		const ls = browser.StorageWrapper.from(window.localStorage)
		const obj = { a: 1, b: { c: '2' }, d: null }
		ls.setItem('key', obj)
		assert(isEqual(obj, ls.getItem('key')))
		ls.removeItem('key')
		assert(isEqual(null, ls.getItem('key')))
	})
	it('StorageWrapper #2: sessionStorage', function() {
		const ls = browser.StorageWrapper.from(window.sessionStorage)
		const obj = { a: 1, b: { c: '2' }, d: null }
		ls.setItem('key', obj)
		assert(isEqual(obj, ls.getItem('key')))
		ls.removeItem('key')
		assert(isEqual(null, ls.getItem('key')))
	})
	it('StorageWrapper #3: length', function() {
		const ls = browser.StorageWrapper.from(window.localStorage)
		ls.set('a', 1)
		ls.set('b', 2)
		ls.set('c', 3)
		assert(ls.length === 3)
		ls.remove('a')
		assert(ls.length === 2)
	})
})
