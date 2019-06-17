import express = require('express')
import * as lw from '@google-cloud/logging-winston'

const app = express()

;(async () => {
  const { mw } = await lw.express.middleware()
  app.use(mw)
  app.get('/', (req, res) => {
    (req as any).log.info('this is log')
    res.status(200).send('Hello, World!').end()
  })
})()
