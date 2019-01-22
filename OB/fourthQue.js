var request = require('sync-request');
var options = {};
var res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1', options);
var output = res.getBody();

if (parseInt(output["userId"]) === 1) {
    console.log("User ID Validation failes here...")
} else {
    console.log("User ID Validation success...")
}

if (res.statusCode === 200) {
    console.log("Status code Validation success...")
}
