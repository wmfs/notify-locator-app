const pov = require('point-of-view')
const fastify = require('fastify')()
const ejs = require('ejs')
const cors = require('cors')

const {
  SERVER_URL,
  APP_PORT
} = process.env

fastify.use(cors())

fastify.register(pov, { engine: { ejs } })

fastify.get('/locator/:uuid', (req, reply) => {
  const { uuid } = req.params
  reply.view('/templates/index.ejs', { uuid, SERVER_URL })
})

fastify.listen(APP_PORT, (err, address) => {
  if (err) console.log('ERROR:', err)

  console.log(`Listening on ${address}`)
})
