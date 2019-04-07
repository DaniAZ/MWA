const express=require('express');
const logger= require('morgan')
const cors=require('cors');
const fs=require('fs');
const url=require('url');
const grades=require('./grades');
const validJson=require('./validMiddleware');


const jsonParser=express.json();
const urlencodedParser=express.urlencoded({extended:false});

const app=express();

app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(logger('dev'));
app.use(jsonParser);
app.use(cors());
app.use(validJson);
app.use('/grades',grades);





app.listen(4000,()=>console.log("server is listening at port 4000"));