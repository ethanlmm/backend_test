const express=require('express');
const mysql=require('mysql');

const app=express();

const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');
let saltrounds=10;

app.use(express.json())




app.use(cors());
app.use(bodyParser.json());

const connection=mysql.createPool({
    host:'192.168.0.13',
    user:'root',
    password:'2147483647',
    database:'ioTest'
});


app.listen('4000',()=>{
    console.log('listening on 4000');
});

app.get('/Input',(req,res)=>{
    connection.query("call Input(3,'{}','{}')",(err,result1)=>{
    res.send(result1);
});

})