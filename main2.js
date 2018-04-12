const fs = require('fs')
const { FileManager } = require('./file-manager')

const fileManager = FileManager({ fs })

fileManager.copy({
  source: {
    path: __dirname,
    name: 'package.json'
  },
  target: {
    path: __dirname,
    name: 'encrypted.txt'
  }
})
