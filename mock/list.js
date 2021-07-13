const list = Array.from({ length: 1000 }).map((item, index) => ({
  id: index + 1,
  num: Math.random(),
  name: ['tom','jack','bob'][Math.floor(Math.random()*10)] || '--'
}))

module.exports = list