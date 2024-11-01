const os = require('os')

const user = os.userInfo()
console.log(user);

console.log('the System Uptime is', os.uptime(), "seconds");

const currentOS = {
    name: os.type(),
    version: os.version(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)