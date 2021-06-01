const fs=require('fs')
const { showCompletionScript } = require('yargs')
const getNotes=()=>{
    return "Your notes..."
}

const addNote=function(title, body){
   const notes=loadNotes() 
   const duplicates= notes.filter(note=>note.title===title)
   if(duplicates.length===0){
        notes.push({
            title:title,
            body:body,
        })
   }else{
    console.log("Note title exists")
  } 
    saveNotes(notes)
}

//function removing notes
const removeNote=function(title){
    const notes=loadNotes();
    const filteredNote=notes.filter(note=>note.title!==title)
    if(filteredNote.length===0){
        console.log("Note was not found")
    }else{
        const noteJson=JSON.stringify(filteredNote)
        fs.writeFileSync('notes.json',noteJson)
    }
}

const saveNotes=function(notes){
    const dataJson= JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}
const loadNotes=function(){
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