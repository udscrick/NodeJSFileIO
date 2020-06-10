const fs = require('fs')

const getNotes = () =>{
    return "\nYour notes..."
}

const addNotes = (title,body) =>{
   
    let notes = loadNotes()
    console.log("In add notes: ",notes)
    let note = [];
    note  = notes.filter(ele=>ele.title==title)
    if(note.length==0){
        notes.push({
            title,
            body
        })
        console.log("In add notes: ",JSON.stringify(notes))
        saveNote(notes)
    }
    else{
        console.log("Note already exists")
    }
   
   
}

const saveNote = (notes) =>{
    fs.writeFileSync(
        'notes.json',
        JSON.stringify(notes)
    )
}

const removeNotes = (title) =>{
    let notes = loadNotes()
    let passval = notes.filter((ele)=>ele.title!=title)
    console.log("Notes is: ",passval)
    saveNote(passval)
}

const listNotes = () =>{
    let notes = loadNotes()
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const jsonData = dataBuffer.toString()
        const passData = JSON.parse(jsonData)
        return passData
    }
    catch{
        console.log("No such file")
        return []
    }
   
    
}

module.exports = {
    getNotes,
    addNotes,
    removeNotes
}