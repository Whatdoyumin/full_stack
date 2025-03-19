fs = require('fs');

if (fs.existsSync('./text')) {
  console.log('폴더가 이미 존재합니다.');
} else {
  fs.mkdir('./text', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('폴더가 생성되었습니다.');
  });
}
