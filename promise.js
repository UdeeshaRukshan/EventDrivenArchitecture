const { log } = require("console");

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating success or failure
      if (success) {
        resolve("Data fetched");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then(() => {
    console.log("Data Received");
  })
  .catch((error) => {
    console.log(error);
  });
