const app = require("./app");
require("dotenv").config();
const connectdb = require("./config/db");

const PORT = process.env.PORT;

connectdb();

app.listen(PORT, () => {
  console.log("Server is Running at ", PORT);
});
