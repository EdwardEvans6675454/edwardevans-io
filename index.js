// crypticCortex.js

const crypto = require('crypto');
const fs = require('fs');

/**
 * Encrypts the given text using AES encryption with the provided key.
 * @param {string} text - The text to be encrypted.
 * @param {string} key - The encryption key.
 * @returns {string} - The encrypted text.
 */
function encrypt(text, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

/**
 * Decrypts the given encrypted text using AES decryption with the provided key.
 * @param {string} encryptedText - The encrypted text.
 * @param {string} key - The decryption key.
 * @returns {string} - The decrypted text.
 */
function decrypt(encryptedText, key) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

/**
 * Reads a file asynchronously and returns a promise resolving to its content.
 * @param {string} filePath - The path to the file.
 * @returns {Promise<string>} - A promise resolving to the content of the file.
 */
function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

/**
 * Writes data to a file asynchronously and returns a promise.
 * @param {string} filePath - The path to the file.
 * @param {string} data - The data to be written.
 * @returns {Promise<void>} - A promise indicating the success of the operation.
 */
function writeFileAsync(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    encrypt,
    decrypt,
    readFileAsync,
    writeFileAsync
};
