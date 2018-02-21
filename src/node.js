/**
 * Read readable stream as stream
 * @param {Readable} stream
 * @returns {Promise<string>}
 */
export function readStream(stream) {
	return new Promise((resolve, reject) => {
		let data = ''
		stream.on('data', d => (data += d))
		stream.on('end', () => resolve(data))
		stream.on('error', e => reject(e))
	})
}
