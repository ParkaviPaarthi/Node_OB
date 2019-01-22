var request = require('sync-request');
var fs = require('fs');
var xml= fs.readFileSync('thirdQue.xml','utf8');
var options = {
    headers: {
        "content-type": 'appliction/xml'
    } ,
    body: xml
};

var res = request('POST', 'https://example.com', options);
var output = res.getBody();

if (res.statusCode === 200) {
    console.log("Status code Validation success...")
}
if (parseInt(output["userId"]) === 1) {
    console.log("User ID Validation failes here...")
} else {
    console.log("User ID Validation success...")
}



