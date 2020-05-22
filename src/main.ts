//importing modules
import express from 'express'
import {path} from './Routes/routes'

//creating and naming an instance of express object
export const app:any=express()

//making using the router middleware
app.use('/',path)




