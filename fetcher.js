const request = require('request');
const fs = require('fs');

const myArgs = process.argv.slice(2);

const downloader = (URL, filePath, callback) => {
  request(URL, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    fs.writeFile(filePath, body, (error, data) => {

      if (!error) callback(data);
    });
});
};

const dataSaver = (data) => {
  console.log('data is being transmitted')
  return data;
}

downloader(myArgs[0], myArgs[1], dataSaver);