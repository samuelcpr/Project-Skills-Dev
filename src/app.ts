import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { Candidate } from './models/candidate'

const app = express()

const router = express.Router()

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Started!')
})