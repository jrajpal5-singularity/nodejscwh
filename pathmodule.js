const path = require('node:path');
const a = path.win32.basename("D:\\webdevwithpython\\youtubetutorial\\nodejscwh\\index.js",".js");
const d = path.dirname("D:\\webdevwithpython\\youtubetutorial\\nodejscwh\\index.js");
// Returns: 'C:\\temp\\myfile.html'
console.log("a " + a + " d " + d);

const f = path.extname(__filename)