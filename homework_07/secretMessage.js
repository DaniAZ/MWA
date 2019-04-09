const MongoClient=require('mongodb').MongoClient;
const express=require('express');
const client=new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01')


const app=express();


app.get('/secret',(req,res)=>{

    client.connect(function(err){
        const db=client.db('homework01');
        const collection=db.collection('data')
    
        collection.findOne({},function(err,doc){
            const encryptor = require('simple-encryptor')(doc.key)
            const decrypted_Message = encryptor.decrypt(doc.message);
            res.json(decrypted_Message);
            client.close();
        })
       console.log("done");
    })
   
})
app.listen(3000,()=>console.log("Server is Started at 3000"));