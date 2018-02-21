// because browser build don't need "node.js"

const fs = require('fs')
const Bili = require('bili')

const indexjs = __dirname + '/src/index.js'
const index2js = __dirname + '/src/index2.js'

const ct = fs.readFileSync(indexjs, 'utf-8')
fs.writeFileSync(index2js, ct.replace(/.*node.*/g, ''), 'utf-8')

Bili.write({
	input: index2js,
	format: ['umd', 'umd-min']
}).then(() => {
	fs.unlinkSync(index2js)
})
