import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const date = new Date();
    const day = date.getDay();
    
    let type = "a WeekDay";
    let adv = "it's time to work hard";
    if(day == 0 || day == 6){
        type = "The Weekend";
        adv = "it's time to have some fun!";
    }
    res.render("index.ejs",{
        dayType:type,
        advice:adv
    });
})
let bowl = ["Apples","Oranges","Pears"];

app.get("/",(req,res)=>{
    res.render("index.ejs",{fruits:bowl});
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);
})