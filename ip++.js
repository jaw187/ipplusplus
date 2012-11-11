var net = require('net');

exports.next = function ipplusplus(ip,options) {
  switch (net.isIP(ip)) {
    case 0 : 
      return ip;
      break;
    case 4 : 
      return ipplusplusv4(ip);
      break;
    case 6 :
      return ipplusplusv6(ip,options);
  };
}

function ipplusplusv4(ip) {
  var octets = ip.split('.');
  octets[3]++;
  if (octets[3] > 255) {
    octets[3] = 0;
    octets[2]++;
    
    if (octets[2] > 255) {
      octets[2] = 0;
      octets[1]++;

      if (octets[1] > 255) {
        octets[1] = 0;
        octets[0]++;

        if (octets[0] > 255) {
          return ip;
        }
      }
    }
  }

  return octets[0] + '.' + octets[1] + '.' + octets[2] + '.' + octets[3];
}

function ipplusplusv6(ip,options) {

  //options = {
  //  leading: display leading 0's
  //  omit: omit 0000 from return string
  // }
  
  var parts = ip.split(':');
  var decimals = new Array(8);
 
  for (var i = 0; i < 8; i++) {
    if (!parts[i] || parts[i] === '') {
      parts[i]="0000";
    }

    decimals[i] = parseInt(parts[i],16);
  }

  decimals[7]++;

  if (decimals[7] > 65535) {
    decimals[7] = 0;
    decimals[6]++;

    if (decimals[6] > 65535) {
      decimals[6] = 0;
      decimals[5]++;

      if (decimals[5] > 65535) {
        decimals[5] = 0;
        decimals[4]++;

        if (decimals[4] > 65535) {
          decimals[4] = 0;
          decimals[3]++;

          if (decimals[3] > 65535) {
            decimals[3] = 0;
            decimals[2]++;

            if (decimals[2] > 65535) {
              decimals[2] = 0;
              decimals[1]++;

              if (decimals[1] > 65535) {
                decimals[1] = 0;
                decimals[0]++;

                if (decimals[0] > 65535) {
                  decimals[0] = 65535
                }
              }
            }
          }
        }
      }
    }
  }

  var returnString = '';

  for (var i = 0; i < 8; i++) {
    parts[i] = decimals[i].toString(16);

    if (options) {
      if (options.leading === true) {
        //DISPLAY LEADING 0s
        for (var k = parts[i].length; k < 4; k++) {
          parts[i] = "0" + parts[i];
        }
        returnString += parts[i];
      }
      if (options.omit === true) {
        // OMIT 0000
        if (options.leading && parts[i] !== "0000") {
          returnString += parts[i];
        }
        else if (parts[i] !== "0") {
          returnString += parts[i];
        }
      }
    }
    else {
      returnString += parts[i];
    }

    if (i !== 7) {
      returnString += ":";
    } 
  }

  return returnString;
}
