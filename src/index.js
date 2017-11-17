import * as settings from './settings';

console.log("Hello from JavaScript!");

fetch(settings.url, {
    method: "GET",
}).then(function(response) {
    console.log(response);
})
