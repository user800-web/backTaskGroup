const express = require("express"); //para empezar servidor
const app = express(); //ejecutarlo

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes - definir rutas
app.use(require("./routes/index"));

app.listen(3000);
console.log("Server on port 3000");
