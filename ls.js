// list of all files and subfolders in the indicated path.
const fs = require('fs')

const folderPath = fs.readdirSync('./')
console.log(folderPath)
