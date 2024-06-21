const { resolve } = require("path");

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Sample data";
      resolve(data);
    });
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processData = data.toUpperCase();
      resolve(processData);
    });
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return processData("Data Fetched: " + data);
  })
  .then((processData) => {
    console.log("Processed Data: " + processData);
  }).catch((error)=>{
        console.log(error);
  })
