//      1-ReadJSON

const fs = require('fs');


const fun = () => {
// Asynchronous reading
fs.readFile('data.jsonl', 'utf8', (err, data) => {
  if (err) {
      console.error('Error reading file:', err);
      return;
  }

  // Split the file content by newlines to get each JSON object
  const lines = data.split('\n').filter(Boolean); // Filter to remove any empty lines

  // Parse and process each line
  lines.forEach(line => {
      try {
          const jsonObject = JSON.parse(line);
          console.log(jsonObject);
      } catch (err) {
          console.error('Error parsing JSON line:', err);
      }
  });
});
};
module.exports = {
    fun
};
