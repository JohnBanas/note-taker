//dependencies
const { findById, createNewNote, validateNote } = require('./notesfx');
const router = require('express').Router();
//give unique id to objects
var getUid = require('get-uid');

//the data to manipulate
const { notes } = require('../../db/db.json');

//get all notes
router.get('/data', (req, res) => {
  let results = notes;
  res.json(results);
});

//get a note by specific id
router.get('/data/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

//make a new note
router.post('/data', (req, res) => {

  req.body.id = getUid();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {

    // add note to json file and notesArray in this function
    const note = createNewNote(req.body, notes);

    // res.json(req.body);
    res.json(note);
  }
});

module.exports = router;







