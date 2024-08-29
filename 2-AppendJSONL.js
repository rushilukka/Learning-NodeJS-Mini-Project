//      2-AppendJSON.js

const fs = require('fs');


const fun = () => {

  const readline = require('readline');
  // Function to check if an ID already exists in the JSONL file
      const checkIfIdExists = (filePath, idToCheck, callback) => {
        const readStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: readStream,
            crlfDelay: Infinity
        });

        let idExists = false;

        rl.on('line', (line) => {
            try {
                const jsonObject = JSON.parse(line);
                if (jsonObject.id === idToCheck) {
                    idExists = true;
                    rl.close(); // Stop reading further lines if the ID is found
                }
            } catch (err) {
                console.error('Error parsing JSON line:', err);
            }
        });

        rl.on('close', () => {
            callback(idExists);
        });
      };



//---------------------------------------------------------------------
// Function to append a JSON object to a JSONL file if the ID does not exist
const appendToJSONL = (filePath, jsonObject) => {
  checkIfIdExists(filePath, jsonObject.id, (idExists) => {
      if (idExists) {
          console.log('ID already exists. Skipping append.');
      } else {
          const jsonLine = JSON.stringify(jsonObject) + '\n';
          fs.appendFile(filePath, jsonLine, (err) => {
              if (err) {
                  console.error('Error writing to file:', err);
              } else {
                  console.log('JSON object appended to file');
              }
          });
      }
  });
};

// Example usage
const newItem = { id: 5, name: 'Item 5' };
  appendToJSONL('data.jsonl', newItem);
};
module.exports = {
    fun
};

