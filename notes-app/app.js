const chalk=require('chalk')
const getNotes=require('./notes')

const notes=getNotes()
console.log(notes);

const successMsg=chalk.green("Success!")
console.log(successMsg);
