const express = require("express");
const dotenv = require("dotenv");
const route = require("./routes/route");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    message: "API running!",
    status: true
  });
});

app.use("/api", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${PORT}`));
