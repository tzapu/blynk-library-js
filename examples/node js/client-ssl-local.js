#!/usr/bin/env node

var Blynk = require('blynk-library');

var AUTH = 'YOUR_AUTH_TOKEN';

var blynk = new Blynk.Blynk(AUTH,
  options= { addr:"192.168.0.101", port:8441 }
);

var v1 = new blynk.VirtualPin(1);
var v9 = new blynk.VirtualPin(9);

v1.on('write', function(param) {
  console.log('V1:', param);
});

v9.on('read', function() {
  v9.write(new Date().getSeconds());
});

blynk.on('connect', function() { console.log("Blynk ready."); });
blynk.on('disconnect', function() { console.log("DISCONNECT"); });
