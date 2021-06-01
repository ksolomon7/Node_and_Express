const fs=require('fs')
const chalk=require('chalk')
const yargs=require('yargs')
const getNotes=require('./notes')

//customize yargs version
yargs.version('1.1.0')

//add, retrieve, read and list
//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string',
        }
    },
    handler:function (argv){
        console.log("Title:" + argv.title)
        console.log("Description:"+argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:"Remove a note",
    handler:function (){
        console.log("Removing a note")
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log("Reading a note")
    }
})

//Create a list command
yargs.command({
    command:"list",
    describe:"List your notes",
    handler:function(){
        console.log("Listing a note")
    }
})

yargs.parse()
// console.log(yargs.argv);