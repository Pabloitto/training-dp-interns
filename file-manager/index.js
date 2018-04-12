const path = require('path')
const FileManager = ({ fs }) => {
  const _resolvePath = ({path: filePath, name}) => {
    return path.resolve(filePath, name)
  }
  const copy = ({source, target}) => {
    const sourcePath = _resolvePath(source)
    const targetPath = _resolvePath(target)
    const content = fs.readFileSync(sourcePath, 'UTF8')
    fs.writeFileSync(targetPath, content)
  }
  return {
    copy
  }
}

module.exports = { FileManager }
