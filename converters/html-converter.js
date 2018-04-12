module.exports = (data) => {
  const convert = () => {
    return `<html>
      <body>
        <table>
          <tbody>
            ${data.map(({name, lastName}) => {
              return `<tr><td>${name}</td><td>${lastName}</td></tr>`
            }).join('\n')}
          </tbody>
        </table>
      </body>
    </html>`
  }
  return { convert }
}
