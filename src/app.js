import express from 'express'

import cors from 'cors'
import cookieParser from 'cookie-parser'

export const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGING,
    credentials: true
}))

app.use(express.json({limit:'15kb'}))
app.use(express.urlencoded({extended:true,limit:'15kb'}))
app.use(express.static('public'))
app.use(cookieParser())