const formData = require('form-data');
const Mailgun = require('mailgun.js');

export default function handler(req, res){
	const USERNAME = 'api'
	const API_KEY = '1085d715ec955a76693a08a4dfb41a2d-c2efc90c-371aff57'
	const DOMAIN_NAME = 'sandboxb32d8e8d776c419e9bdd771df080c388.mailgun.org'

	const mailgun = new Mailgun(formData)
	const client = mailgun.client({username: USERNAME, key: API_KEY})
	const messageData = {
		from: 'Excited User <taslim.eniolla@gmail.com>',
		to: 'taslim.eniolla@gmail.com',
		subject: 'Hello',
		text: 'Testing some Mailgun awesomeness!',
		'o:tracking': 'False'
	};

	client.messages
	.create(DOMAIN_NAME, messageData)
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

	res.status(200).json('Mail sent successfully!')
}

/*

const API_KEY = 'YOUR_API_KEY';
const DOMAIN = 'YOUR_DOMAIN_NAME';

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});

const messageData = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'alice@example.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!',
  'o:tracking': 'False'
};

client.messages.create(YOUR_DOMAIN_NAME, messageData)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.error(err);
});


*/