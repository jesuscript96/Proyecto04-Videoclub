const express = require("express");
const app = express();
const router = require("./routers/router");

app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(router);


module.exports = app;







// const authRouter = require("./routers/authRouter")
// app.use(authRouter);