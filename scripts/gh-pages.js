const path = require('path');
const fs = require('fs');
const ghpages = require('gh-pages');
const { spawnSync } = require('child_process');

const dist = path.join(__dirname, '../dist');
const CNAME = `${dist}/CNAME`;

spawnSync('yarn', ['run', 'build'], {
  env: process.env,
  cwd: process.cwd(),
  stdio: ['inherit', process.stdout, process.stdout]
});

if (!fs.existsSync(CNAME)) {
  fs.writeFileSync(CNAME, 'frontinsm.com.br');
}

ghpages.publish(dist, {
  message: 'Static site release'
}, err => {
  if (err) console.error('\x1b[31m%s\x1b[0m', `🚫 ${err}`);
});
