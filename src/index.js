import * as settings from '@/settings';
import * as crypto from '@/crypto';

console.log("Hello from JavaScript!");

const my_key = crypto.generate_private_key();
const my_public_key = crypto.public_key_from_private_key(my_key);
const my_address = crypto.address_from_private_key(my_key);
console.log("Here's your private key: " + my_key);
console.log("Here's your public key: " + my_public_key);
console.log("Here's your address: " + my_address);

const message = "My signed message";
const message_signature = crypto.sign(message, my_key);

console.log(crypto.verify(message, message_signature, my_key));

const bad_message = "My bad message";
console.log(crypto.verify(bad_message, message_signature, my_key));

fetch(settings.test_url, {
    method: "GET", 
}).then( (response) => {
    return response.text()
}).then( (json_string) => {
    console.log(json_string); 
    return JSON.parse(json_string);
}).then( (json_object) => {
    console.log(json_object);
});