const yargs = require('yargs')
const notesUtil = require('./notes')

yargs.command({
  command: 'add',
  describe: 'Add New Note',
  builder: {
    title: {
      describe: 'Add Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Add Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notesUtil.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove existing note',
  builder: {
    title: {
      describe: 'Remove Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notesUtil.removeNote(argv.title)
  },
})

yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler() {
    notesUtil.listNotes()
  },
})

yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'List Specific Note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notesUtil.readNote(argv.title)
  },
})

yargs.parse()
// console.log(yargs.argv)
