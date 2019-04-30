const fastify = require('fastify')()
const cors = require('cors')

fastify.use(cors())

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  }
})

fastify.get(`/locator/:uuid`, (req, reply) => {
  return reply.view('/templates/index.ejs', {
    uuid: req.params.uuid,
    updateUrl: process.env.UPDATE_URL,
    mapquestKey: process.env.MAPQUEST_KEY
  })
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`notify-locator-app listening on ${fastify.server.address().port}`)
})
