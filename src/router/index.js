import express from 'express'
import indexController from '../controller/index.js'

const router = express.Router()

router.get('/date', indexController.date)

export default router