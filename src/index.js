import * as settings from './settings';
import * as bitcoin from 'bitcoinjs-lib';

console.log("Hello from JavaScript!");

const myPair = bitcoin.ECPair.makeRandom();
console.log("Here's your private key: " + myPair.toWIF());
console.log("Here's your address: " + myPair.getAddress());

const message = "My signed message";
const messageHash = bitcoin.crypto.sha256(message);
const messageSignature = myPair.sign(messageHash);

console.log(myPair.verify(messageHash, messageSignature));

const badMessage = "My bad message";
console.log(myPair.verify(bitcoin.crypto.sha256(badMessage), messageSignature));

fetch(settings.url, {
    method: "GET",
}).then(function(response) {
    console.log(response);
})
