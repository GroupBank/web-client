import * as bitcoin from 'bitcoinjs-lib';

export function generate_private_key() {
    return bitcoin.ECPair.makeRandom().toWIF();
}

export function address_from_private_key(private_key) {
    const key_pair = bitcoin.ECPair.fromWIF(private_key);
    return key_pair.getAddress();
}

export function sign(message, private_key) {
    const key_pair = bitcoin.ECPair.fromWIF(private_key);
    const message_hash = bitcoin.crypto.sha256(message);
    return key_pair.sign(message_hash);
}

export function verify(message, signature, private_key) {
    const key_pair = bitcoin.ECPair.fromWIF(private_key);
    const message_hash = bitcoin.crypto.sha256(message);
    return key_pair.verify(message_hash, signature);
}