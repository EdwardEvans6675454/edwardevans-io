# Edwardevans-io

Edwardevans-io is a Node.js module providing functions for encryption, decryption, file reading, and writing.

## Installation

You can install this module via npm: `npm install edwardevans-io`

## Usage
```javascript
const crypticCortex = require('cryptic-cortex');

// Encrypt text
const encryptedText = crypticCortex.encrypt('Hello, world!', 'secretkey');

// Decrypt text
const decryptedText = crypticCortex.decrypt(encryptedText, 'secretkey');

// Read a file asynchronously
crypticCortex.readFileAsync('example.txt')
    .then(data => {
        console.log('File content:', data);
    })
    .catch(error => {
        console.error('Error reading file:', error);
    });

// Write data to a file asynchronously
crypticCortex.writeFileAsync('example.txt', 'Some data to write')
    .then(() => {
        console.log('Data has been written to file successfully.');
    })
    .catch(error => {
        console.error('Error writing to file:', error);
    });
```