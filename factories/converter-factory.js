
function resolve (type) {
  try {
    const formatType = type.toUpperCase()
    return require(`../converters/${formatType}-converter`)
  } catch (ex) {
    throw new Error('')
  }
}

module.exports = { resolve }
