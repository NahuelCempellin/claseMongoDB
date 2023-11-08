import express  from 'express'
import { CreateUser, SignIn } from '../controllers/user.controllers'
const router = express.Router()

router.post('/signout', CreateUser)
router.post('/signin', SignIn)

export default router

