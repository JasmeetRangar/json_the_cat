const request = require('request');
if (process.argv.length < 3) {
  console.log('not enough parameters!');
  process.exit();
}

const url = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];
const requestCallback = (error, response, body) => {
  if (!response || response.statusCode !== 200) {
    console.log('Request Error:', response && response.statusCode);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Not a valid breed. try again please");
  } else {
    console.log(data[0].description);
  }
};
request(url, requestCallback);