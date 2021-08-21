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
  handler: function (argv) {
    notesUtil.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove existing note',
  handler: function () {
    console.log('Function will run on remove command')
  },
})

yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: function () {
    console.log('Function will run on list command')
  },
})

yargs.command({
  command: 'read',
  describe: 'Read note',
  handler: function () {
    console.log('Function will run on read command')
  },
})

yargs.parse()
// console.log(yargs.argv)
