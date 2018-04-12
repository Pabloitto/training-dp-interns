module.exports = (data) => {
  const convert = () => {
    return data.map(({name, lastName}) => {
      return `${name}, ${lastName}`
    }).join('\n')
  }
  return {
    convert
  }
}
