const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const client = new MongoClient('mongodb+srv://cs572:cs572@cluster0-ctv9y.mongodb.net/homework07?retryWrites=true', { useNewUrlParser: true });


client.connect(function (err) {
    const db = client.db('homework07');
    const collection = db.collection('resturants')
    console.log('Question Num 8')

    const query = {
        "name": {$gt:'Mad'}
             
    }
    const proj={
        restaurant_id:1,
        name:1,
        address:1,  
    }
    const cursor = collection.find(query).project(proj)
     cursor.each(function (err, doc) {
        console.log(doc);
    })

    client.close();
})
console.log("done");

