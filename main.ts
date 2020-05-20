//importing modules
import express from 'express'
import {path} from './routes'

//creating and naming an instance of express object
export const app=express()

//making using the router middleware
app.use('/',path)




