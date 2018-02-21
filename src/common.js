/**
 * Generate integer from [min,max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function random(min, max) {
	return parseInt(Math.random() * (max - min) + min)
}
