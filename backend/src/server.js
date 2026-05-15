const app = require("./app");

// const PORT = dotenv("PORT") || 5000;
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is Running at ", PORT);
});
