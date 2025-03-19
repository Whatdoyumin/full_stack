fs = require('fs');

const data = fs.readFileSync('./example.txt', 'utf8');

if (fs.existsSync('text-1.txt')) {
  console.log('이미 파일이 존재합니다.');
} else {
  fs.writeFileSync('./text-1.txt', data);
}
