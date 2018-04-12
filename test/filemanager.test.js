const assert = require('assert')
const sinon = require('sinon')

const { FileManager } = require('../file-manager')

let fileManager = null

const config = {
  source: {
    path: 'fakepath/blahblah',
    name: 'package.json'
  },
  target: {
    path: 'fakepath/blahblah',
    name: 'encrypted.txt'
  }
}

const fsMock = {
  writeFileSync: sinon.stub(),
  readFileSync: sinon.stub().returns('123456')
}

describe('file manager tests', () => {
  beforeEach(() => {
    fileManager = FileManager({ fs: fsMock })
  })
  it('should copy file', () => {
    fileManager.copy(config)
    assert(fsMock.readFileSync.called === true)
    const copiedContent = fsMock.writeFileSync.args[0][1]
    assert(copiedContent === '123456')
  })
})
