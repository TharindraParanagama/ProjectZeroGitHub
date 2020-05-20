//importing modules
import express from 'express'
import {db} from './connection'
import {sess,requestTracker,bp,auth,role_manager, validator} from './middleware'

//creating a router instance
export const path=express.Router()

//using the middleware
path.use(requestTracker)
path.use(bp)
path.use(sess)


//route to the landing page with a get request
path.get('/landingPage',function(req:any,res:any){

    res.send('Hi Welcome to the book store\n Please login to proceed.')
    
})

//route to the login portal with the user credentials to be specified in the 
//body of the request
path.post('/login',auth,function(req:any,res:any){
    
  

})

//special route to role
path.get('/roles',role_manager,function(req:any,res:any){

       if(req.session.role==="admin"){
           res.send('You are logged in as an admin')
       }else if(req.session.role==="customer"){
            res.send('You are logged in as a customer')
       }else{
            res.send('You are logged in as a service provider')
        }
    

})



//route to search section
path.get('/search',validator,function(req:any,res:any){

    db.any('SELECT * FROM book_catalog')
     .then((result: any)=>{
         res.json(result)
     })
     .catch((error: any) => {
         res.send('Sorry your search result does not match with any of our records!')
     })
   

})

//route to obtain the details for all the book supplied by a given supplier
//affiliated with my store
path.get('/ID/:supplier_id',validator,function(req:any,res:any){
   
    let path=req.params

    db.any('SELECT * FROM book_catalog WHERE supplier_id=${supplier_id}',{
       supplier_id:path.supplier_id
    })
    .then((result: any)=>{
        res.json(result)
    })
    .catch((error: any) => {
        res.send('Sorry your search result does not match with any of our records!')
    })

})

//route to obtain title of books which is higher that a given supplier rating
path.get('/rating/:supplier_rating',validator,function(req:any,res:any){

    let path=req.params

    db.any('SELECT title FROM book_catalog INNER JOIN supplier ON book_catalog.supplier_id=supplier.supplier_id WHERE supplier_rating > ${supplier_rating}',{
       supplier_rating:path.supplier_rating
    })
    .then((result: any)=>{
        res.json(result)
    })
    .catch((error: any) => {
        res.send('No records found')
    })

 })

//route for new joiners        
path.post('/signup',function(req:any,res:any){

    db.none('INSERT INTO members VALUES(${username},${password},${role})',{
        username:req.body.username,
        password:req.body.password,
        role:req.body.role  
    })
    .then((result:any)=> {
        res.send('Please login to continue')
    })
    .catch((error:any) => {
        res.send('please input valid information!')
    });
 
})

//route for a session termination
path.get('/logout',function(req:any,res:any){
    
    req.session.destroy()
    res.redirect('/landingPage')
    

})



    