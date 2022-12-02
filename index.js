require("dotenv").config({path: ".env"})

const app = require("./app")
const db = require('./db/db')

let PORT = process.env.YOUR_PORT || process.env.PORT || 3000;

require('./models/associations.js');



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`)

    db.authenticate().then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })

})



