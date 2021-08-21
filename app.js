const yargs = require('yargs')

yargs.command({
  command: 'add',
  describe: 'Add New Note',
  handler: function () {
    console.log('Function will run on add command')
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

console.log(yargs.argv)
