const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const app = express();

//flash middleware
app.use(flash());

//express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
  })
);

//view engine
app.set("view engine", "ejs");

//flash handle
app.get("/flash", (req, res) => {
  req.flash("info", "Flash is back!");
  res.redirect("/");
});

//route handle
app.get("/", (req, res) => {
  res.render("index", { message: req.flash("info") });
});

app.listen(3000);
