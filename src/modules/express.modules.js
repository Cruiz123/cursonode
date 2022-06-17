import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { json, urlencoded } from 'express'

export default async (app, routes = []) => {
  if (!app || !Array.isArray(routes)) return

  app.set('trust proxy')
  app.disable('x-powered-by')

  /**
      * Middlewares
      */

  app.use(cors({ origin: '*' }))
  app.use(morgan('dev'))
  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.use(helmet())

  // Definicion de rutas

  for (const route of routes) {
    const { path = null, controller = null } = route

    if (path && controller) {
      app.use(path, controller)
    }
  } return app
}
