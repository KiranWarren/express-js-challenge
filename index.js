// Import the express js package
const express = require("express");

// Create an instance of express js
const app = express();

// Data required for the server later
//    - In this case, the port that the server will listen on
const port = 3000;

// localhost:3000/calculator/1/add/1
app.get("/calculator/:var_a/:operation/:var_b", (request, response) => {
  let var_a = +request.params.var_a;
  let var_b = +request.params.var_b;
  let operation = request.params.operation;

  if (isNaN(var_a) || isNaN(var_b)) {
    response.json({
      error: "One or more of the operands was not a number!",
    });
  } else {
    let answer = 0;
    switch (operation) {
      case "add":
        answer = var_a + var_b;
        break;
      case "minus":
        answer = var_a - var_b;
        break;
      case "divided":
        answer = var_a / var_b;
        break;
      case "multiplied":
        answer = var_a * var_b;
        break;
      default:
        response.sendStatus(404);
    }
    response.json({
      result: `${answer}`,
    });
  }
});

// Instruct the server to listen to web traffic
app.listen(port, () => {
  // This message will appear in the server terminal, not the client's browser.
  console.log(`Example app listening on port ${port}.`);
});
