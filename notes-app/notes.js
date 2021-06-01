const fs=require('fs')
const { showCompletionScript } = require('yargs')
const getNotes=()=>{
    return "Your notes..."
}

const addNote=function(title, body){
   const notes=loadNotes() 
   notes.push({
       title:title,
       body:body,
    })
    
    saveNotes(notes)
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
    addNote:addNote
}