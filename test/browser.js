import { JSDOM } from 'jsdom'
import assert from 'assert'
import { browser } from '../'

const HTML_TMPL = '<!DOCTYPE HTML><html><head></head><body></body></html>'

describe('browser', function() {
	beforeEach(function() {
		const { window } = new JSDOM(HTML_TMPL)
		global.window = window
		global.document = window.document
	})
	it('addCSS', function() {
		browser.addCSS('/style.css')
		const len = Array.from(document.querySelectorAll('link')).filter(el => el.href === '/style.css').length
		assert(len === 1)
	})
	it('addJS', function() {
		browser.addJS('/app.js')
		const len = Array.from(document.querySelectorAll('script')).filter(el => el.src === '/app.js').length
		assert(len === 1)
	})
	afterEach(function() {
		delete global.window
		delete global.document
	})
})
