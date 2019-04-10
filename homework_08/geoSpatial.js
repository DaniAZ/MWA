const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const client = new MongoClient('mongodb+srv://username:password@cluster0-ctv9y.mongodb.net/homework07?retryWrites=true', { useNewUrlParser: true });

const app=express();
app.use(express.json());

  app.use((req, res, next) => {
    client.connect((err) => {
        if(err)
        throw err;
      const db=client.db('homework07');
    const collection=db.collection('locations')
         req.collection = collection;
        next();
    });
});
app.post('/locations',(req,res)=>{
      const newValue={
        name:req.body.name,
        category:req.body.category,
        location:[
            longitude=req.body.location[0],
            latitude=req.body.location[1]
        ]
    }
    req.collection.insertOne(newValue);
    res.json(newValue);
})
app.get('/search',(req,res)=>{
   req.collection.createIndex({location:'2d'})
   const cursor= req.collection.find({location:{$near:[41.0178238,-91.9694793]}});
         cursor.limit(3);
         cursor.toArray(function(err,doc){
             res.json(doc);
         })
})
app.listen(3000,()=>console.log("Server is listening at 3000"))