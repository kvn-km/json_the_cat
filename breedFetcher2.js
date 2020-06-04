const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {

    // console.log(body);

    if (error) {
      // console.log("eerroorr1");
      callback(error, null);
    } else {
      if (body === "[]") {
        // console.log("eerroorr2");
        callback(true, null);
      } else {
        // console.log("ppaass");
        let data = JSON.parse(body);
        let desc = data[0].description;
        // console.log(desc);
        callback(null, desc);
      }
    }
  });
};

// function callback(error, data) {
//   // if (error) {
//   //   return error;
//   // }
//   let dataParsed = JSON.parse(data);
//   // console.log(data);
//   // console.log(dataParsed);

//   return dataParsed[0].description;

// }

module.exports = { fetchBreedDescription };