const express = require("express");

// Config environment variables
const dotenv = require("dotenv");
dotenv.config();

const Database = require("./config/db");

// Connect to Database
const db = new Database(process.env.MONGODB_URL);

db.connect().catch((err) => {
  console.error(err);
});

const routes = require("./routes");

const app = express();
app.use(express.json())

// API routes
app.use("/api", routes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at http://localhost: ${port}`);
});
