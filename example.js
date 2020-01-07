const readline = require('readline');
const Oled = require('spi-oled');
const oled = new Oled({ width: 128, height: 64, dcPin: 23, rstPin : 24});

oled.begin(function(){
  oled.clearDisplay();
});

function oledTest(str){
  oled.clearDisplay();
  oled.setCursor(1, 1);
  oled.writeString(2, str, 2, true);
}

// Command 
rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function(chunk){
  chunk = chunk.trim();
  oledTest(chunk);  
}).on('close', function() {
   process.exit(0);
});
