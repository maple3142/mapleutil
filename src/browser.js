export function addCSS(href) {
	const el = document.createElement('link')
	el.href = href
	el.rel = 'stylesheet'
	document.head.appendChild(el)
}
export function addJS(src) {
	const el = document.createElement('script')
	el.src = src
	document.head.appendChild(el)
}
