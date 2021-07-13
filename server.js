const http = require("http")

const app = http.createServer((req, res) => {
  {
    console.log(req.method, req.url)
    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    const result = require(`./mock${ req.url }`)
    res.end(result ? JSON.stringify(result) : 'not found')
  }
}).listen(3000)