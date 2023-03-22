const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/api/todoApi");

const app = express();
app.use(cors());
app.use("/api/todoApi", todoRouter);
app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3002);
