export function random(min, max) {
	//[min,max)
	return parseInt(Math.random() * (max - min) + min)
}
