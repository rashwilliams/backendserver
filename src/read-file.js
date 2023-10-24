const fs = require("fs");

fs.readFile("welcome.txt", "hello", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Data from welcome.txt:", data);
});
