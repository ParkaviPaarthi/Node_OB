var request = require('sync-request');
var options = {
    headers: {
        "content-type": 'appliction/json'
    } ,
    body: {
        "title": 'foo',
        "body": 'bar',
        "userId": 1
    }
};

var res = request('POST', 'https://jsonplaceholder.typicode.com/posts', options);
var output = res.getBody();

if (parseInt(output["id"]) === 'number') {
    console.log("User ID Validation failes here...")
} else {
    console.log("User ID Validation success...")
}

if (res.statusCode === 200) {
    console.log("Status code Validation success...")
}