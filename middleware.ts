//module imports
import session from 'express-session'
import bodyParser from 'body-parser'
import {db} from './connection'
import bcrypt from 'bcrypt'

//creating an instance and setting parameters of the session middleware
export const sess=session({secret:'test',saveUninitialized:true,resave:true})

//creating an instance of the body parser middleware to parse json objects specified in the body 
//portion of a request 
export const bp=bodyParser.json()

//logger that logs the request method,request url,request timestamp and request query type
export const requestTracker=(req:any,res:any,next:any)=>{
    console.log(`A ${req.method} request was made to path ${req.path} on the following timestamp ${new Date()} and the query for this is ${req.query}`)
    next()
}

//authentication middleware with password hashing to authenticate users
export let auth = function(req:any, res:any,next:any) {

   const saltRounds=10

    req.session.username=req.body.username
    req.session.password=req.body.password
    req.session.role=req.body.role
    
   const pass=bcrypt.hashSync(req.session.password, saltRounds)
  
    db.one('SELECT username,password FROM members WHERE username=${user_name} AND password=${password}',{
        user_name:req.session.username,
        password:req.session.password
     })
     .then((result: any)=>{
         if(bcrypt.compareSync(result.password,pass)){
           res.send('You are logged in')
        }else{
           res.send('login failed')
        } 
        next()
     })
     .catch((error: any) => {
        res.send("Sorry you are not registered with us,So please create an account!")
     })

}; 

//validator middleware
export const validator=function(req:any,res:any,next:any){

      if(req.session.username && req.session.password){
         next()
      }else{
         res.send("sorry you are not authorized")
      }

      

}

//admin access based on the role information stored on the members table of the database
export let role_manager = function(req:any, res:any, next:any) {

   db.one('SELECT role FROM members WHERE username=${user_name} AND password=${password} AND role=${role}',{
       user_name:req.session.username,
       password:req.session.password,
       role:req.session.role
    })
    .then((result: any)=>{
      
      next()
      
    })
    .catch((error: any) => {
       res.send("Access denied")
    })

}; 