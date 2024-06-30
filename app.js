import { request } from 'http';
import { display } from './logger.js';
import express, { response } from 'express';
import { readFile } from 'fs';
import dotenv from 'dotenv';



dotenv.config();
const app = express();




app.listen(process.env.NODE_PORT,()=>{
    console.log(`app open at Port  ${process.env.NODE_PORT}`);
    console.log(process.env.NODE_PUBLIC_URL);
    
})

app.get('/',(request,response)=>{
    const res = response;
    readFile('./home.html','utf-8',(err,html)=>{
        if(err){
            res.status(500).send('sorry out of order');
        }
        res.send(html);    
    })
})

const sayHello = (name) =>{
    console.log('hello'+name);
};

sayHello('Nice');
display("hi")

// console.log(logger.url)
