require('dotenv').config();

const bed = require('./lib/bed');
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('> ');
rl.prompt();

rl.on('line', (line) => {
  bed.updateStatus();
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});
