import express from "express";
import bodyParser from "body-parser";
import { title } from "process";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home.ejs", {
        name: "Asif Pirimzade",
        title : "Asif Pirimzade's Portfolio",
        projects : [],
    });
});

app.get("/about", (req,res) => {
    res.render("about.ejs", {
        name: "Asif Pirimzade"
    })
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs", {
        title : "Contact Page", 
        name : "Asif Pirimzade",
    });
});

app.listen(port, () =>{
    console.log("Server is running on port 3000");
})