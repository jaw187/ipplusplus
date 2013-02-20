ipplusplus
==========
  Function to return to increment an IP address

Install
-------
```
npm install ipplusplus
```

Example
-------
```
var ippp = require('ipplusplus')

console.log(ippp.next('127.0.0.1'))
// 127.0.0.2

console.log(ipp.next('2001:db8:1234:ffff:ffff:ffff:ffff:ffff'))
// 2001:db8:1235:0:0:0:0:0

console.log(ippp.prev('127.0.0.0'))
// 126.255.255.255

console.log(ipp.prev('2001:db8:1234:ffff:ffff:ffff:ffff:ffff'))
// 2001:db8:1234:ffff:ffff:ffff:ffff:fffe
```

Options
-------
```
options = {
    leading: 'display leading 0's',
    omit: 'omit 0000 from return string'
}
```
