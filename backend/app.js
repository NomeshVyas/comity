import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { CORS_ORIGIN } from '../backend/envData.js'

const app = express()

app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true
}))

app.use(morgan('common'))

app.use(express.json({ limit: "64kb"}))

app.use(express.urlencoded())

app.use(express.static("public"))

export { app }