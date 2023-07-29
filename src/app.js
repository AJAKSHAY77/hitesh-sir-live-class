import express from "express"

 const app = express();

app.get("/",(req,res)=>{
    res.send("hello world")
  })

app.get("/instagram",(req,res)=>{
    res.send("<h1>you have visited intagram</h1>")
})

app.get("/twitter",(req,res)=>{
    res.send("<h1>you have visited twitter</h1>")
})

export default app;