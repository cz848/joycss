var Box = require('../lib/box');
//var a = new Box(['line-height', 'height', 'width', 'padding', 'background'], 
  //['20px', '12px', '1.5em', '20px 1em', 'url(a.png) left 10px']);
  //
var a = new Box(['line-height', 'height', 'width', 'padding', 'background'], 
  ['20px', '12px', '1.5em', '20px 1em', 'url(a.png) 50% 10px'], ['body']);
console.log([a.width, a.height]);
console.log(a.background);
