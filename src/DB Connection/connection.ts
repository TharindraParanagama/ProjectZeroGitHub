
//module imports
import pgp from 'pg-promise'

//creating an instance of the pgp object
const init:any = pgp()

//initialization of the connection parameter string 
const connection:string='postgres://postgres:lolz@172.31.40.18:5432/OnlineBookStore'

//passing the connection parameter string to the pgp object
export const db:any = init(connection)

