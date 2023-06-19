const express = require("express");
const { main } = require("./db");

const path = require("path");

const port = process.env.port || 5000;
const bodyParser = require("body-parser");
main();

const app = express();

const db = require("./db");

db;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(bodyParser.json());
const _dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/foodapp/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "foodapp", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api is running successfully");
  });
}

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api", require("./routes/CreateUser"));
app.use("/api", require("./routes/DisplayData"));

app.listen(port, () => {
  console.log("server started on 5000");
});
