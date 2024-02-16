import express from 'express'
import indexController from '../controller/index.js'

const router = express.Router()

router.get('/', indexController.date)

export default router