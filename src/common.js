/**
 * Generate integer from [min,max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function random(min, max) {
	return parseInt(Math.random() * (max - min) + min)
}
export function getPermutation(arr, len = arr.length) {
	const result = []
	function perm(cur = []) {
		if (cur.length === len) {
			result.push(cur)
			return
		}
		for (let x of arr) {
			if (cur.indexOf(x) !== -1) continue
			perm(cur.concat(x))
		}
	}
	perm()
	return result
}
