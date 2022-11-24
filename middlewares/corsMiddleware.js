const app = require("../app")

const corsMiddleware = async (req, res, next) => {
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
      });
      console.log(res)
      next();
}

module.exports = { corsMiddleware };
