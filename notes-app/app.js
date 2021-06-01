const fs=require('fs')
const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes')
const { readNotes } = require('./notes')

//customize yargs version
yargs.version('1.1.0')

//add, retrieve, read and list
//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:"Remove a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:"Task Title",
            demandOption:true,
            type:'string'
        }
    },

    handler(argv){
        notes.readNotes(argv.title)
    }
})

//Create a list command
yargs.command({
    command:"list",
    describe:"List your notes",
    handler(){
        notes.listNotes()
    }
})

yargs.parse()
// console.log(yargs.argv);