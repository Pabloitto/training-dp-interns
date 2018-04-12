module.exports = (data) => {
  const convert = () => {
    return `<xml>
            ${data.map(({name, lastName}) => {
              return `<name>${name}</name><lastName>${lastName}</lastName>`
            }).join('\n')}
          </xml>`
  }
  return { convert }
}
