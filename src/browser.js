/**
 * Add css to head
 * @param {string} href
 */
export function addCSS(href) {
	const el = document.createElement('link')
	el.href = href
	el.rel = 'stylesheet'
	document.head.appendChild(el)
}
/**
 * Add js to head
 * @param {string} src
 */
export function addJS(src) {
	const el = document.createElement('script')
	el.src = src
	document.head.appendChild(el)
}
