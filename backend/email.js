nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport('smtps://issunews%40gmail.com:pizzapizza@smtp.gmail.com');

module.export = {

function sendEmail(sender, reciever, subject, text){
	let from = sender+ " <issuenews@gmail.com>"
	let mailOps = {
		from: '',
		to: '',
		subject: '',
		text: ''
	};
	mailOps.from = from;
	mailOps.to = reciever;
	mailOps.subject = subject;
	mailOps.text = text;

	transporter.sendMail(mailOps, (error, info) =>{
		if (error) {
	    	return console.log(error);
	    }
	    console.log('Message sent: %s', info.messageId);
	});
}

}
