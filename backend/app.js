const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// Connect to MongoDB (Replace with your own MongoDB URL)
mongoose.connect("mongodb://localhost/my-website", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Serve frontend files
app.use(express.static("../frontend"));

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
