var ippp = require('ipplusplus');

var b = '2001:db8:1234:ffff:ffff:ffff:ffff:ffff';
var a = b;

console.log('Start:  ' + new Date());

for (i = 0; i < 65536; i++) {
  for (j = 0; j < 65536; j++) {
    b = ippp.next(b);
  }
}

console.log('Finish:  ' + new Date());
console.log();
console.log(a);
console.log(b);
