const path = require('path');

const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

// 01 - 2
console.log(`파일 절대 경로: ${__filename}`);

const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);

console.log('\n');

// 01 - 3
const fn = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');

console.log(`파일 이름: ${fn}`);
console.log(`파일 이름(확장자 제외): ${fn2}`);

console.log('\n');

// 01 - 4 파일 확장명 출력
const ext = path.extname(__filename);
console.log(`파일 확장자: ${ext}`);

console.log('\n');

// 01 - 5 파일 경로 요소 전체 출력
const parsedPath = path.parse(__filename);
console.log(parsedPath);
