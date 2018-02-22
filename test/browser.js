import { JSDOM } from 'jsdom'
import assert from 'assert'
import { browser } from '../'

const HTML_TMPL = '<!DOCTYPE HTML><html><head></head><body></body></html>'
const JSDOM_OPTIONS = { runScripts: 'dangerously', resources: 'usable' }

describe('browser', function() {
	beforeEach(function() {
		const { window } = new JSDOM(HTML_TMPL, JSDOM_OPTIONS)
		global.window = window
		global.document = window.document
	})
	afterEach(function() {
		delete global.window
		delete global.document
	})
	it('loadCSS', function() {
		return browser
			.loadCSS('data:text/css;charset=utf-8;base64,KntkaXNwbGF5Om5vbmU7fQ==')
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
})
