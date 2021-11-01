//express callback methods for use and route imports
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const CadastroRouter = require("./routes/CadastroRouter")
const session = require("express-session")
//end of express callback methods and route imports (but working) #trully needs to be working

//ejs engine setup, public static files settings & json files express extension
app.set("view engine", "ejs"); 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('method'))
//end of ejs engine setup, public static files settings & json files express extension

//routes config
app.use(CadastroRouter);;
//end of routes config 

//render config for main    
app.get("/", (req, res) => {
    return res.render("index.ejs");
});
//end of render config for main

app.use(session({
  secret: 'just a secret hahaha!',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

//port listen server
app.listen(3000, () => {
    console.log("Initializing... " + "Verifiying Errors... " + "No errors encountered! " + "Server initializing... "  + "Listening on 3000 ")
});
//end of port listen server
