const readlineSync = require('readline-sync')
const fs = require('fs')

// in progress !
const folderPath = ''
const folderName = ''
const newFolderName = ''

// Check if the name has atleast 1 caracter.
if(newFolderName.length === 0) {
  console.log('Folder name is empty.')
  process.exit(1)

  // Check if the 2 names are different.
} else if (folderName === newFolderName){
  console.log('New folder name has to be different.')
  process.exit(1)

  // Rename the folder
} else {
  fs.renameSync(folderName, newFolderName)
  console.log('You have successfully renamed your folder!')
}


