const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const { setStatics } = require("./utils/statics")


const adminRoutes = require("./routes/admin")
const indexRoutes = require("./routes/index")
const errorController = require("./controllers/error")

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
//End Middleware

//statics
setStatics(app);
//statics

//Ejs Config
app.set("view engine", "ejs");
app.set("views", "views");
//Ejs Config


//Routes
app.use(indexRoutes)
app.use('/admin', adminRoutes)
//End Routes

//404
app.use(errorController.get404);

app.listen(3000, () => console.log("server runnig on port 3000 ..."))

