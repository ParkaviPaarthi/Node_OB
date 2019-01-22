'use strict';
const fs = require('fs');
let details = {
    name: 'Wipro Ltd',
    id: "124"
};

let data = JSON.stringify(details);
fs.writeFileSync('secondQue.json', data);
console.log("JSON value of Name is changed....");