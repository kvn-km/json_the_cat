const request = require("request");
const process = require("process");
const query = process.argv.splice(2);

let result = request('https://api.thecatapi.com/v1/breeds/search?q=' + query, (error, response, body) => {
  if (error) {
    console.log('!! ~ Error ~ !!\n', 'Couldn\'t connect to', error.host);
    return;
  } else {
    if (response.statusCode === 200) {
      console.log('StatusCode: 200 -> Successful Query');
    } else {
      console.log('StatusCode: ', response && response.statusCode);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("That breed does not exist. Please check for spelling or actual existence... literally, not metaphysically.");
      return;
    } else {
      console.log(data[0].description);
    }
  }
});