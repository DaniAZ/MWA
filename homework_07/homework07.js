const MongoClient=require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const express=require('express');
const lecture=require('./lecture');


const client=new MongoClient('mongodb+srv://cs572:cs572@cluster0-ctv9y.mongodb.net/homework07?retryWrites=true',{ useNewUrlParser: true});
const jsonParser=express.json();

const app=express();
app.use(jsonParser);

  app.use((req, res, next) => {
    client.connect((err) => {
        if(err)
        throw err;
      const db=client.db('homework07');
    const collection=db.collection('lectures')
         req.collection = collection;
        next();
    });
});
app.post('/lectures',(req,res)=>{
    const newValue=new lecture(req.body.course,req.body.lecture);
       req.collection.insertOne(newValue);
    res.json(newValue);
})
app.get('/lectures/:course',(req,res)=>{
     req.collection.findOne({course:req.params.course},function(err,doc){
           res.json(doc);
  })
  
})
app.get('/lectures',(req,res)=>{
    const cursor= req.collection.find({}).project({_id:0});
    cursor.limit(4);
         cursor.toArray(function(err,doc){
               res.json(doc);
         })
 
})
app.delete('/lectures/:course',(req,res)=>{
     req.collection.deleteOne({course:req.params.course},function(err,doc){
        if(err)
         throw err;
         res.json(doc);
  })
  
})
app.put('/lectures/:id',(req,res)=>{
    const myquery={_id:new ObjectID(req.params.id)};
    const newvalues={$set:new lecture(req.body.course,req.body.lecture)};
    req.collection.updateOne(myquery,newvalues,{upsert:true},function(err,doc){
        if(err)
        throw err;
        res.json(newvalues);
    });
})
app.post('/search/:q',(req,res)=>{
    const cursor= req.collection.find({lecture:req.params.q})
    cursor.toArray(function(err,docs){
          res.json(docs);
    })
})


app.listen(4000,()=>console.log("Server is Started at 4000"));


