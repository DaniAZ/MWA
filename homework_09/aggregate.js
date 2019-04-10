const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const client = new MongoClient('mongodb+srv://cs572:cs572@cluster0-ctv9y.mongodb.net/homework07?retryWrites=true', { useNewUrlParser: true });


client.connect(function (err) {
    const db = client.db('homework07');
    const collection = db.collection('zips')
    console.log('Question Num 1')

    const cursor=collection.aggregate([
         {$group:{_id:{state:"$state",city:"$city"},population:{$sum:"$pop"} }},
         {$sort:{"_id.state":1,"population":1}},
         {$group:{_id:"$_id.state",
                  city:{$first:"$_id.city"},
                   population:{$first:"$population"}}},
         {$sort:{"_id":1}}
        ])
           cursor.each(function (err, doc) {
        console.log(doc);
    })



  
    client.close();
})
console.log("done");

