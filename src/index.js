import * as settings from './settings';
import * as bitcoin from 'bitcoinjs-lib';

console.log("Hello from JavaScript!");
console.log("Here's your address: " + bitcoin.ECPair.makeRandom().toWIF())

fetch(settings.url, {
    method: "GET",
}).then(function(response) {
    console.log(response);
})
