const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Backend Running Successfully ");
});


app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to Basic REST API"
  });
});


app.post("/api/data", (req, res) => {
  const data = req.body;

  res.json({
    message: "Data received successfully",
    data: data
  });
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use("/api/users", require("./routes/userRoutes"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});