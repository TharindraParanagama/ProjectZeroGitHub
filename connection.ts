
//module imports
import pgp from 'pg-promise'

//creating an instance of the pgp object
const init = pgp({/* Initialization Options */})

//initialization of the connection parameter string 
const connection='postgres://postgres:lolz@localhost:5432/OnlineBookStore'

//passing the connection parameter string to the pgp object
export const db = init(connection)

