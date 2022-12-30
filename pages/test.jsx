import {useEffect} from 'react'

export default function Test(){

	useEffect(() => {
		// const mailgun = require("mailgun-js");
		// const API_KEY = '1085d715ec955a76693a08a4dfb41a2d-c2efc90c-371aff57';
		// const DOMAIN = 'sandboxb32d8e8d776c419e9bdd771df080c388.mailgun.org';
		// const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});
		// const data = {
		// 	from: 'Excited User <taslim.eniolla@gmail.com>',
		// 	to: 'taslim.eniolla@gmail.com',
		// 	subject: 'Hello',
		// 	text: 'Testing some Mailgun awesomness!'
		// };
		// mg.messages().send(data, function (error, body) {
		// 	console.log(body);
		// });
	}, [])

	return (
		<h1>Testing mail API</h1>
	)
}