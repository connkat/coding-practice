
const btoa = require('btoa');

const clientId = 'PaymentServices'
const clientSecret = 'w3947hywur59ghw9435hygw9845hyw908h4'


const encodedAuth1 = btoa(`${clientId}:${clientSecret}`);

const encodedAuth2 = Buffer.from(
	`${clientId}:${clientSecret}`,
	'binary'
).toString('base64');

console.log("#1: ", encodedAuth1)
console.log("#2: ", encodedAuth2)