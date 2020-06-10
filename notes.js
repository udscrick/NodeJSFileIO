const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>{
    return "\nYour notes..."
}

const addNotes = (title,body) =>{
   
    let notes = loadNotes()
    // console.log("In add notes: ",notes)
    let note = [];
    note  = notes.filter(ele=>ele.title==title)
    if(note.length==0){
        notes.push({
            title,
            body
        })
        
        saveNote(notes)
        console.log(chalk.green.inverse('Note added successfully!'))
    }
    else{
        console.log(chalk.red.inverse("Note already exists"))
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
    if(notes.length>passval.length)
        console.log(chalk.blue.inverse("Note '"+title+"' deleted successfully!"))
    else
        console.log(chalk.red.inverse("Note does not exist"))
    saveNote(passval)
}

const listNotes = () =>{
    let notes = loadNotes()
    if(notes.length>0){
        console.log(chalk.red("Notes are: "))
        count = 0;
        notes.forEach(element => {
            console.log(chalk.green(element.title))
        });
    }
    else{
        console.log(chalk.red.inverse("No notes found"))
    }
}

const readNotes = (title) =>{
    let notes = loadNotes()
  
    let noteToRead = notes.find(ele=>ele.title==title)
    console.log("Title is: ",noteToRead)
    if(noteToRead)
    {
        console.log(chalk.yellow.inverse("Selected note info: "))
        console.log(chalk.inverse("Title: ",noteToRead.title))
        console.log(chalk.inverse("Description: ",noteToRead.body))
    }
    else{
        console.log(chalk.red.inverse("No notes found"))
    }
   
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
    removeNotes,
    listNotes,
    readNotes
}