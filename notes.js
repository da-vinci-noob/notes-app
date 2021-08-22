const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse('Your Notes listed'))
  notes.forEach((note) => {
    console.log(`${chalk.blue(note.title)}: ${chalk.green(note.body)}`)
  })
}

const addNote = (title, body) => {
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

const removeNote = (title) => {
  const notes = loadNotes()

  const updatedNotes = notes.filter((note) => note.title !== title)

  if (notes.length === updatedNotes.length) {
    console.log(chalk.red(`Note with title: ${chalk.blue(title)} not Found!!!`))
  } else {
    saveNotes(updatedNotes)
    console.log(chalk.green('Note Removed!'))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
}
