const express=require("express");
//we are creating a new application of express
const app=express();
//this is known as request handler
app.use("/hello",(req,res) => {
    res.send("Hello namas!");
});
app.use("/test",(req,res) => {
    res.send("Hello from the server!");
});//this is known as route handlers
app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000");
});
