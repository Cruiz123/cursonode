import { Router } from 'express'
import authController from '../../controllers/auth.controllers'
import { dataDictionary } from '../../config'
import {reqValidationSelectorHandler } from '../../middlewares/validation.middlewares'
import authSchemas from '../../validators/auth.schema'

const { REQ_STRATEGIES } = dataDictionary
const authRouter = Router()

authRouter.post('/signup', reqValidationSelectorHandler({
  schma: authSchemas.signup,
  node: 'auth',
  validationStrategy: REQ_STRATEGIES,
  parserStrategy: 'onlyBody'
}), authController.signup)

export default authRouter
