const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const path = require("path");

const PORT = 5000;
app.use(cors());

app.get("/api/github/:username", async (req, res) => {
  const username = req.params.username;

  let url = `https://api.github.com/users/${username}`;

  try {
    const resp = await axios.get(url);
    const data = resp.data;

    res.status(200).json({
      message: "Successfull",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Enable to fetch Data",
    });
  }
});

app.listen(PORT, () => {
  console.log(`listen at ${PORT}`);
});
