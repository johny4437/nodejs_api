const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const { host, port, user, pass } = require('../Config/mailConfig');


const transporter = nodemailer.createTransport({
    host,
    port,
    secure, 
    auth: { user, pass}
  });

  transporter.use('compile',hbs({
      viewEngines:'handlebars',
      viewPath :path.resolve('./src/Resources/mail/'),
      extName: '.html'
  }));



  module.exports = transporter;