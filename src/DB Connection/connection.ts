
//module imports
import pgp from 'pg-promise'

//creating an instance of the pgp object
const init:any = pgp()

//initialization of the connection parameter string 
const connection:string='postgres://postgres:admin123@obs.chyb3tibizbs.us-east-2.rds.amazonaws.com:5432/onlinebookstore'

//passing the connection parameter string to the pgp object
export const db:any = init(connection)

