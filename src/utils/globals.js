import crypto from 'crypto-js';

const apiKey = "3ec58553c40501074ad1d7b32c9bdb0deeeb7d47";
const secret = "zX6SkTvrWtt9W9R7wvE6/w==";
const current_date = new Date().toISOString().split("T")[0];
const concatedString = apiKey+secret+current_date;
const cjsHash = crypto.SHA512(concatedString);
const signature = cjsHash.toString(crypto.enc.Base64);

export { apiKey, signature };
