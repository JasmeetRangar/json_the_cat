const request = require('request');
// if (process.argv.length < 3) {
//   console.log('not enough parameters!');
//   process.exit();
// }
const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  const requestCallback = (error, response, body) => {
    if (!response || response.statusCode !== 200) {
      return callback(" " + response + response.statusCode, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback("Invalid breed", null);
    } else {
      return callback(null, data[0].description);
    }
  };
  request(url, requestCallback);
};

module.exports = {fetchBreedDescription};