/**
 * Load css and append to head
 * @param {string} href
 * @returns {Promise<Element>} A promise contains link element
 */
export function loadCSS(href) {
	return new Promise((resolve, reject) => {
		const el = document.createElement('link')
		el.onload = () => resolve(el)
		el.onerror = e => reject(e)
		el.href = href
		el.rel = 'stylesheet'
		document.head.appendChild(el)
	})
}
/**
 * Load js and append to head
 * @param {string} src
 * @returns {Promise<Element>} A promise contains script element
 */
export function loadJS(src) {
	return new Promise((resolve, reject) => {
		const el = document.createElement('script')
		el.onload = () => resolve(el)
		el.onerror = e => reject(e)
		el.src = src
		document.head.appendChild(el)
	})
}
/**
 * Load image
 * @param {string} src
 * @returns {Promise<Element>} A promise contains img element
 */
export function loadIMG(src) {
	return new Promise((resolve, reject) => {
		const el = document.createElement('img')
		el.onload = () => resolve(el)
		el.onerror = e => reject(e)
		el.src = src
	})
}
