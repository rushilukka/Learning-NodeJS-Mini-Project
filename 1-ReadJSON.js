
const fs = require('fs');

// Asynchronous reading
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});

// Synchronous reading
try {
  const data = fs.readFileSync('data.json', 'utf8');
  const jsonData = JSON.parse(data);
  console.log(jsonData);
} catch (err) {
  console.error(err);
}
