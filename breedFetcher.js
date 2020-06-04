let request = require("request");

let result = request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  console.log('statusCode:', response && response.statusCode);
  // console.log("body typeof: ", typeof body);
  const data = JSON.parse(body);
  // console.log(data);
  // console.log("data typeof: ", typeof data);
  // console.log(data);
  console.log(data[0].description);

});

// console.log(typeof body);
