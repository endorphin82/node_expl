// index.js
var moment = require('moment');
console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());
var name = "Andrey", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);