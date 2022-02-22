const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");

const User = require("./model/userSchema");
app.use(express.json());
//router connects

app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000;

//Middleware

// const middleware = (req, res, next) => {
//     console.log(`hello my mi middleware`);
//     next();
// }

//app.get('/', (req, res) => {
//   res.send('hello world from server');
//})

// app.get('/about', (req, res) => {
//     console.log(`helloo my about`);
//     res.send(`hello about world from the server`);

// })

// app.get('/contact', (req, res) => {
//     res.cookie("Test", 'thapa')
//     res.send('hello world from contact');
// });

app.get("/signin", (req, res) => {
  res.send("hello world from signin");
});

app.get("/signup", (req, res) => {
  res.send("hello world from signup");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`server is  runnig on port ${PORT}`);
});
