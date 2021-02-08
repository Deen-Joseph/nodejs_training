//parse - converting to readable or understandable form


//path
// const path = require('path');

// var pathObj =  path.parse(__filename);
// console.log (pathObj);

const os = require('os');

var totalMemory =os.totalmem();

var freeMemory = os.freemem();

// console.log('total memory:'+totalMemory); this is rplaced by template string

//template string


console.log('Total Memory: ${totalMemory}');
console.log('Free Memory: ${freeMemory}');
