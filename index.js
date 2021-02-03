//Programatically send an email
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD
  }
});

transport
  .sendMail({
    from: process.env.GMAIL_ADDRESS,
    to: process.env.GMAIL_ADDRESS,
    subject: 'Hola a todos!',
    text: 'Testing the nodemailer package!',
    html: `<html>
            <head>
                <style>
                    a {
                        bakground-color: yellow;
                    }
                </style>
            </head>    
            <body>
                <a href="https://example.com">Confirm your email address</a>
            </body>
        </html>`
    //html: ''
  })
  .then((result) => {
    console.log('Email was sent.');
    console.log(result);
  })
  .catch((error) => {
    console.log('There was an error sending the email');
    console.log(error);
  });
