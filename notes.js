const fs = require('fs')
const chalk = require('chalk')

const addNote = function (title, body) {
  const notes = loadNotes()

  // Check for duplicate Notes
  const duplicate = notes.find((x) => x.title === title)

  if (duplicate === undefined) {
    notes.push({
      title: title,
      body: body,
    })
    console.log(chalk.green('New Note Added!'))
  } else {
    console.log(chalk.red('Note with title already Exists!'))
  }

  saveNotes(notes)
}

const removeNote = function (title) {
  const notes = loadNotes()

  const updatedNotes = notes.filter(function (note) {
    return note.title !== title
  })

  if (notes.length === updatedNotes.length) {
    console.log(chalk.red(`Note with title: ${chalk.blue(title)} not Found!!!`))
  } else {
    saveNotes(updatedNotes)
    console.log(chalk.green('Note Removed!'))
  }
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
  removeNote: removeNote,
}
