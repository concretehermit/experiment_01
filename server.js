const http = require('http')
const port = 3000

const requestHandler = (req, res) => {
  console.log(req.url)
  res.end('When it tweets, it pours!')
}

const errorHandler = (err) => {
  if (err) {
    return console.log("Error: ", err)
  }

  console.log(`Server listening on port ${port}`)
}

const server = http.createServer(requestHandler)
server.listen(port, errorHandler)
