/**
 * converter html, csv, json
 */
const formats = require('./formats')
const { resolve } = require('./factories/converter-factory')
const jsonConverter = require('./converters/json-converter')
function main () {
  const users = [
    {name: 'juan', lastName: 'itto'},
    {name: 'felipe', lastName: 'nevarez'},
    {name: 'bryan', lastName: 'montes'}
  ]
  let converter = resolve(formats.XML)(users)
  converter = jsonConverter(users)

  const result = converter.convert()
  console.log(result)
}

main()
