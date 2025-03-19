import fs from 'node:fs/promises';

async function readDirAsync() {
  try {
    const files = await fs.readdir('./');
    console.log(files);
  } catch (err) {
    console.error(err);
  }
}

readDirAsync();
