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
/**
 * StorageWrapper
 * @description A wrapper for localStorage & sessionStorage
 */
export class StorageWrapper {
	static from(storage) {
		return new StorageWrapper(storage)
	}
	constructor(storage) {
		this.__storage = storage
		const keys = ['key', 'removeItem', 'clear']
		for (let k of keys) {
			this[k] = storage[k].bind(storage)
		}
	}
	get length() {
		return this.__storage.length
	}
	setItem(k, v) {
		this.__storage.setItem(k, JSON.stringify(v))
	}
	getItem(k) {
		return JSON.parse(this.__storage.getItem(k))
	}

	//aliases
	set(k, v) {
		this.__storage.setItem(k, JSON.stringify(v))
	}
	get(k) {
		return JSON.parse(this.__storage.getItem(k))
	}
	remove(k) {
		this.removeItem(k)
	}
}
