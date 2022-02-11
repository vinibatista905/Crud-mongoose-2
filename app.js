const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

const userRouter = require("./routes/userRouter");

app.use("/user", userRouter);

const adminRouter = require("./routes/adminRouter");

app.use("/admin", adminRouter)

const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Essa é a Home");
});

// DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Conectado ao banco de dados");
  }
);

//Ouvindo servidor
app.listen(5000);
