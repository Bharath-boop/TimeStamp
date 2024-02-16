import express from 'express'
import appRouter from './router/index.js'

const app = express()
const PORT = 8000

app.use('/', appRouter)


app.listen(PORT, () => console.log(`app listening to ${PORT}`))