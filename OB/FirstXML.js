var obj = {name: "Wipro Ltd"};
var fs = require('fs');
var xml2js = require('xml2js');

var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);

fs.writeFile('firstQue.xml', xml, function (err){

if (err) throw err;
console.log('xml value changed...');
});