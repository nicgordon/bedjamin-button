// require('dotenv').config();

// const bed = require('./lib/bed');
// const readline = require('readline');

// const rl = readline.createInterface(process.stdin, process.stdout);

// rl.setPrompt('> ');
// rl.prompt();

// rl.on('line', (line) => {
//   bed.updateStatus();
//   rl.prompt();
// }).on('close', () => {
//   process.exit(0);
// });


var gpio = require('rpi-gpio');

gpio.on('change', function(channel, value) {
  console.log('Channel ' + channel + ' value is now ' + value);
});
gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH);

console.log('gpio listening');

while(true) {
  // keep the program alive
}
