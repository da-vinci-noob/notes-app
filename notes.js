const fs = require('fs')

const addNote = function (title, body) {
  const notes = loadNotes()

  // Check for duplicate Notes
  const duplicate = notes.find((x) => x.title === title)

  if (duplicate === undefined) {
    notes.push({
      title: title,
      body: body,
    })
    console.log('New Note Added!')
  } else {
    console.log('Note with title already Exists!')
  }

  saveNotes(notes)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const saveNotes = function (notes) {
  dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
}
