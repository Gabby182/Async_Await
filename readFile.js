const fs = require('fs');
const promisifiedReadfile = require('./lib/libraryReadFile.js');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./files/file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./files/file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile('./files/file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./files/file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./files/file.txt', 'utf-8');
  let secondSentence = await promisifiedReadfile('./files/file2.txt', 'utf-8');
  console.log(firstSentence, secondSentence);
}

readFiles();
