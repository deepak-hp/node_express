// OS Modules - used to interact with the OS or the server 
const os = require("os");

// info about current user

console.log(os.userInfo());

// method returns the system uptime in secs

console.log(`system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);