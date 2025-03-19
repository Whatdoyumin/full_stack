fs = require('fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFileSync('./text-1.txt', data);
  }
});
