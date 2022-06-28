const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.urlencoded({ extended: true }));

// An api endpoint that returns a short list of items
app.post("/api/getTransactionHistory", (req, res) => {

  let data = JSON.stringify({
    jsonrpc: "2.0",
    id: 0,
    method: "alchemy_getAssetTransfers",
    params: [
      {
        fromBlock: "0x0",
        fromAddress: "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1",
        category: ["external", "internal", "token"],
      },
    ],
  });

  var requestOptions = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  const apiKey = "wu9oYM6rdwuY8sg4lEIAVZUv_U6Pin0-";
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;
  const axiosURL = `${baseURL}`;

  axios(axiosURL, requestOptions)
    .then((response) => {
      res.json(response.data.result.transfers);
    })
    .catch((error) => res.secn(error));
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
