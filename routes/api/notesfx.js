//dependencies
const fs = require("fs");
const path = require("path");

//function for delete later
function findById(id, notesArray) {
  let newNoteArray = notesArray;
  let deleteNoteID = id;
  //filter out the deleted note from the array
  newNoteArray = newNoteArray.filter(theNote => {
    return theNote.id != deleteNoteID;
  })
  
  //rewrite the new array
  fs.writeFileSync(path.join(__dirname, "../../db/db.json"),
    JSON.stringify(newNoteArray, null, 2));
  return newNoteArray;
}

// function create new note
function createNewNote(body, notesArray) {
  // console.log(body);
  let note = body;
  let allNotes = notesArray;
  allNotes.push(note);
  console.log(notesArray);
  //update and write to db.json
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  // return finished code to post route for response
  // return body;
  return notesArray;
}

//validate new animal object
function validateNote(note) {
  console.log(note)
  if (!note.title) {
    return false;
  }
  if (!note.text) {
    return false;
  }
  if (!note.id) {
    return false;
  }
  return true;
};

module.exports = {
  findById,
  createNewNote,
  validateNote
};