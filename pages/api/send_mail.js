export default function handler(req, res){
	// require('dotenv').config()
	// const nodemailer = require('nodemailer')
	
	// const {body} = req
	// const {name, email, subject, phone, message} = JSON.parse(body)
	
	// const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS
	// const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
	// console.log(EMAIL_PASSWORD, EMAIL_ADDRESS)

	// const transporter = nodemailer.createTransport({
	// 	port: 465,
	//     host: 'smtp.gmail.com',
	//     auth: {user: EMAIL_ADDRESS, pass: EMAIL_PASSWORD},
	//     secure: true,
	// })
	
	// transporter.sendMail({
	//     from: 'demo@demo.com',
	//     to: 'your email',
	//     subject: `Message From ${req.body.name}`,
	//     text: req.body.message,
	//     html: `<div>${req.body.message}</div>;`
   	// }, (err, info) => {
	// 	if(err) console.log(err)
	// 	else console.log(info)
	// })

	res.status(200).json('Mail sent successfully!')
}