import dotenv from 'dotenv'
dotenv.config();

import express from "express";

 


const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    console.log("hellow i am server");
    
});

const port=process.env.PORT || 4500
console.log(port);

app.listen(port,()=>{
    console.log("server started at port", port);
  
})