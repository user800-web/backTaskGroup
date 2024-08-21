const express = require("express"); //para empezar servidor
const cors = require("cors");
const routes = require("./routes/index");
const app = express(); //ejecutarlo

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes - definir rutas
app.use(routes);

app.listen(3000);
console.log("Server on port 3000");
