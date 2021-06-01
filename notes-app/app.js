const chalk=require('chalk')
const getNotes=require('./notes')

const notes=getNotes()
console.log(notes);

const successMsg=chalk.blue.inverse.bold("Success")
console.log(successMsg);

console.log(process.argv[2])