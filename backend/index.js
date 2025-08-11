const express = require('express');
const cors = require('cors');
const app= express();
app.use(express.json());
app.use(cors({origin:true}));  

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    return res.json({ username: username, secret: "sha256..." });
  });

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });