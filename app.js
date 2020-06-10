var fs = require('fs')// To load core modules,i.e. inbuilt modules, we just need to specify the module name
const yargs = require('yargs')
const notes = require('./notes')
// let validator = require('validator') //Importing npm package
// var nameImported = require('./utils.js')


// const chalk = require('chalk')



// const msg = getNotes()
// // console.log("Message is: ",msg)

// const bluemsg = chalk.blue.inverse("Hello chalk")
// console.log(bluemsg);


// let file_name = 'notes.txt'
// fs.writeFileSync(file_name,"This file was created by NodeJSssss")//Synchronously write to a file

//Append to file
// try{
//     fs.appendFileSync(file_name,'\ndata_to_append is: '+nameImported)
//     fs.appendFileSync(file_name,getNotes())
//     // console.log(chalk.blue.inverse("Hello chalk"))
// }
// catch(err){

// }


//Accessing User Input from the command line
// console.log("Command line arguments are: ",process.argv)
//The response will give an array
//arr[0]  will give location where node is installed in the system
//arr[1]  will give location in the system where the current file resides
//arr[2]  will give the argument that we provided in the command line


//Accept from the user the action they wish to perform eg: add,edit etc.
// let userAction = process.argv[2].toLowerCase()
//We can use npm package yargs in order to parse the input arguments in a clean manner

yargs.version('1.1.0')
// console.log(process.argv)
// console.log(yargs.argv)//gives us a cleaner list of cmd arguments
//eg providing --title titlename as an argument gives us a seperate property called 'title'

//Creating commands with yargs
let count = 0
//1. Add
yargs.command({
    command:'add',
    describe:'Adds a new note',
    builder: { //Builder is used to set additional options that can be specified using --optionname
        title:{
            describe:'TItle for the note',
            demandOption: true, //is this property required?
            type:'string'
            
        },
        body:{
            describe:'The contents of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
      notes.addNotes(argv.title,argv.body)
    }
})





//2.Remove
yargs.command({
    command:'remove',
    describe:'Remove note',
    builder:{
        title:{
            describe:'Note title to delete',
            demandOption:true,
            type:"string"
        }
    },
    handler: (argv) =>{
        notes.removeNotes(argv.title)
        console.log("In remove")
    }
})
// .parse()
// //3.Read
yargs.command({
    command:'read',
    describe:'Reading a note',
    handler:(argv)=>{
        console.log("Reading a note")
    }
})
// .parse()
// //4.List
yargs.command({
    command:'list',
    describe:'List the notes',
    handler:(argv)=>{
        console.log("List the notes")
    }

})
// .parse()
// let userActionYargs = yargs.argv["action"].toLowerCase()
// console.log("Yargs output: ",userActionYargs)

//Setting app version number with yargs(1.0.0 by default) 



// switch(userActionYargs){
//     case 'add':
//         console.log("User chose to add")
//         break;
//     case 'edit':
//         console.log("User chose to edit1")
//         break;
//     default:
//         console.log("Unknown action")
    
// }

yargs.parse()