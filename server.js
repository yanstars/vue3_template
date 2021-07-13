const http = require("http")

const app = http.createServer((req, res) => {
  {
    console.log(req.method, req.url)
    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    let list = Array.from({ length: 10 }).map((item, index) => ({
      id: index + 1,
      num: Math.random()
    }))

    let obj = {
      name: 'TOM',
      age: 30
    }

    if (req.url == '/list') {
      res.end(JSON.stringify(list))
    }

    if (req.url == '/detail') {
      res.end(JSON.stringify(obj))
    }

    res.end('not found')
  }
}).listen(3000)