const readlineSync = require('readline-sync')
const fs = require('fs')

const folderName = readlineSync.question('Folder Name: ')

// Check if the name has atleast 1 caracter.
if(folderName.length === 0) {
  console.log('Sorry, folder name is empty.')
  process.exit(1)
}
// Create a folder if the name is not already taken.
if(!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
    console.log(`You have sucessfully created the folder '${folderName}'.`)
    process.exit()
} else {
  console.log(`Error: Folder '${folderName}' already exists.`)
}


