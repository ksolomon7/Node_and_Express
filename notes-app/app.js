//fs module => writeFilesSync is a function that takes in two arguments
//fs module file needs to be required
//calling require which is a function that calls in the module we want to use
//the return value of the require is returned to the variable fs
const fs= require('fs')
fs.writeFileSync('notes.txt', 'My name is Robot')

//the writeFile and writeFilesync allows you to add data to a file
