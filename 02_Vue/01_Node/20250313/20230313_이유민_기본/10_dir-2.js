fs = require('fs');

if (fs.existsSync('./test2/test3/text4')) {
  console.log('폴더가 이미 존재합니다.');
} else {
  fs.mkdir('./test2/test3/text4', { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('폴더가 생성되었습니다.');
  });
}
