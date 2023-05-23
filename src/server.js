const express = require("express");

const app = express();
const PORT = process.env.PORT || 1234; 
app.use(express.json()); 
app.use(express.static("docs"));

app.listen(PORT, () => {
  console.log("listening on port" + " " + PORT);
});

