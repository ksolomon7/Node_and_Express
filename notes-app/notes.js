const fs=require('fs')
const chalk=require('chalk')
const { showCompletionScript } = require('yargs')
const getNotes=()=>{
    return "Your notes..."
}

const addNote=(title, body)=>{
   const notes=loadNotes() 
   const duplicates= notes.filter(note=>note.title===title)
   if(duplicates.length===0){
        notes.push({
            title:title,
            body:body,
        })
        console.log(chalk.green.inverse("Note added!")) 
   }else{
     console.log(chalk.red.inverse("Note title taken!"))
   } 
    saveNotes(notes)
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

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}