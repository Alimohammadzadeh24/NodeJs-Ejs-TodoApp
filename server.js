const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const { setStatics } = require("./utils/statics")


const adminRoutes = require("./routes/admin")

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
app.get("/", (req, res) => {
     res.render("index", { pageTitle: "کارهای روزمره" });
});
app.use('/admin', adminRoutes)
//End Routes

app.listen(3000, () => console.log("server runnig on port 3000 ..."))

