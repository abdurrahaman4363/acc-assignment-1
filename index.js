const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const usersRoutes = require("./routes/v1/users.route.js");
const errorHandler = require("./middleware/errorHandler");


app.use(cors());
app.use(express.json());
// app.use(express.static("public"));
app.set("view engine", "ejs");


dbConnect();

 app.use("/api/v1/users", usersRoutes);
 app.use("/user/all",usersRoutes)
 app.use("/user/save",usersRoutes)
 app.use("/user/update",usersRoutes)
 app.use("/user/delete",usersRoutes)


app.get("/", (req, res) => {
  res.render("home.ejs",{
    id: 5,
    user: {
      name: "test"
    }
  });
});

app.get('/home', (req, res) =>{
  res.send(__dirname + "/public/users.json")
})

app.all("*", (req, res) => {
  res.send("NO route found.");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});