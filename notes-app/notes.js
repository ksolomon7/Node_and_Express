const fs=require('fs')
const chalk=require('chalk')
const { showCompletionScript } = require('yargs')

const addNote=(title, body)=>{
   const notes=loadNotes() 
   const duplicateNote= notes.find(note=>note.title===title)
   if(!duplicateNote){
        notes.push({
            title:title,
            body:body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added!")) 
   }else{
     console.log(chalk.red.inverse("Note title taken!"))
   } 
}

//function removing notes
const removeNote=(title)=>{
    const notes=loadNotes();
    
    const filteredNote=notes.filter(note=>note.title!==title)
    saveNotes(filteredNote)
    if(notes.length>filteredNote.length){
        console.log(chalk.green.inverse("Note removed")) 
    }else{ 
        console.log(chalk.red.inverse("No note found!"))
    }
}

const saveNotes=(notes)=>{
    const dataJson= JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}

const loadNotes=()=>{
    try{
       const dataBuffer=fs.readFileSync('notes.json')
       const dataJson=dataBuffer.toString()
       const data=JSON.parse(dataJson)
       return data
    }catch(e){
        return[]
    }
}

//adds list Notes
const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.blue.inverse("Your Notes:"))
    notes.forEach(note=>console.log(chalk.blue("Title: "+note.title)))
}

//read list notes
const readNotes=(title)=>{
    const notes=loadNotes()
    const foundNote=notes.find(note=>note.title===title)

    if(foundNote){
        console.log(chalk.blue.inverse("Title: " +foundNote.title))
        console.log("Body: " +foundNote.body)
    }else{
        console.log(chalk.red.inverse("Note not found!"))
    }
}
module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}