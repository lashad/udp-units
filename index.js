
var PORT = 2323;
//var HOST = 'units.ge';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var iport = 2323;
var ihost = "94.43.97.26";
var state = 0;

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {

    console.log(remote.address + ':' + remote.port +' - ' + message);
    
    iport = remote.port;
    ihost = remote.address;
    
});



setInterval(function(){

    if(!iport) return ;
    
    state = !state ? 1 : 0;
/*     var message = "AT+TH=" + state + "\r\n"; */
    var message = "test\r\n";
    console.log(message);
    server.send(message, 0, message.length, iport, ihost, function (err) {
     // client.close();
    	
    });

}, /* 300000 */5000); 


server.bind(PORT);

