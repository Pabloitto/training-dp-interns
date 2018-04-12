module.exports = (data) => {
  const convert = () => JSON.stringify(data, null, 2)
  return {
    convert
  }
}
