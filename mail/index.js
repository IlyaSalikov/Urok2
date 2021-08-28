const fs = require('fs');
const nodemailer = require('nodemailer');
const logAndPass = require('./logAndPass');

let testEmailAccount = nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: logAndPass.login,
        pass: logAndPass.password,
    },
})

let result = transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    to: 'nsk.ilya.nsk@gmail.com',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html:
        'This <i>message</i> was sent from <strong>Node js</strong> server.',
})

console.log(result)