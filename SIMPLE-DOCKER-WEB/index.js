const express =  require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hi there from express")
});

app.listen(8080,()=>{
    console.log("Server started  listening on port 8080 .....")
})