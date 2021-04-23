//dependencies
const fs = require("fs");
const path = require("path");

//function for delete later
function findById(id, notesArray) {
  console.log(notesArray);
  const result = notesArray.filter(note => note.id === id)[0];
  
  return result;
}

// function create new note
function createNewNote(body, notesArray) {
  // console.log(body);
  const note = body;
  notesArray.push(note);

  //update to write to animals.json
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({ note: notesArray }, null, 2)
  );
  // return finished code to post route for response
  // return body;
  return note;
}

//validate new animal object
function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  if (!note.id || typeof note.id !== Number) {
    return false;
  }
  return true;
};

module.exports = {
  findById,
  createNewNote,
  validateNote
};