import express from 'express'
import modules from './modules'
import { constants, sequelizeConfig } from './config'
import { api } from './api'

async function startServer () {
  const app = express()

  await modules.init({
    expressApp: app,
    expressRoutes: api(),
    sequelizeInstance: sequelizeConfig
  })

  app.listen(constants.PORT, (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Server is runing on port', constants.PORT)
  })
}

startServer()
