const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/api/todoApi");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/todoApi", todoRouter);
app.use((req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

app.listen(3002, () => console.log("Server is running on port 3002"));
