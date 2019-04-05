const express=require('express');
const axios=require('axios');
const app=express();
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing',true);
app.set('x-powered-by',false);
app.get('/users',async (req,res)=>{
    res.set({'Cache-Control':'private, max-age=86400',
            'Last-Modified': Date.now})
    res.links({
                next: 'http://localhost:4000/users?page=1',
                last: 'http://localhost:4000/users?page=3'
            })
    
      try{
      const getUser= await axios('https://randomuser.me/api/?results=10');
      res.json(getUser.data); 
     }catch(e){
         console.log(e);
     }
})


const port=4000;
app.listen(port,()=>{console.log("server is listening on port 3000")});