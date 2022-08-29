// src/app.ts

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { router } from './routes'


const app = express()

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Started!')
})