const express=require('express');
const axios=require('axios');
const app=express();

app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing',true);
app.set('x-powered-by',false);
//using etag
//app.enable('etag')
app.get('/users',async (req,res)=>{
    res.set({'Cache-Control':'private', 'max-age':86400,
            'Last-Modified': 'Fri, 05 April 2019 15:45:37 GMT',
            "Content-Security-Policy":{"script-src":"https://apis.google.com","default-src":'self'},
              'X-RateLimit-Limit':3,
              'X-RateLimit-Remaining':2})

    res.links({
                next: 'http://localhost:4000/users?page=2',
                last: 'http://localhost:4000/users?page=1'
            })
    
      try{
      const getUser= await axios('https://randomuser.me/api/?results=10');
      res.json(getUser.data.results); 
     }catch(e){
         console.log(e);
     }
})


const port=4000;
app.listen(port,()=>{console.log("server is listening on port 4000")});