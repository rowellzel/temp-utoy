const { readFileSync, writeFileSync } = require("fs")

const one = readFileSync('./content/one.txt', 'utf-8')
const two = readFileSync('./content/test.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt',
    `Heyyyyy, ${one}, ${two}`
)