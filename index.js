const fastify = require('fastify')()
const cors = require('cors')

fastify.use(cors())

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  }
})

fastify.get(`/`, (req, reply) => {
  console.log('Locating that boi')
  reply.view('/templates/index.ejs')
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`notify-locator-app listening on ${fastify.server.address().port}`)
})
