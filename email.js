const nodemailer = require('nodemailer')
const pug = require('pug')

const sendEmail = async option => {
    const transporter = nodemailer.createTransport({
        host:'smtp.zoho.com',
        secure:false,
        auth: {
            user:'mt5cryptoradar@zohomail.com',
            pass:'(jamesfx23)'
        }
    })
    // const transporter = nodemailer.createTransport({
    //     service:'gmail',
    //     host:'smtp.gmail.com',
    //     secure:false,
    //     auth: {
    //         user:'mt5cryptoradar@gmail.com',
    //         pass:'yvtkjzeffnicwpaz'
    //     }
    // })
    
    const mailOptions = {
        from: 'mt5cryptoradar@zohomail.com',
        to:option.email,
        subject:option.subject,
        html: pug.renderFile(`${__dirname}/${option.template}.pug`,{
            username: option.username,
            url: option.url,
            pin:option.pin,
            amount: option.amount,
            subject: option.subject,
            message: option.message
        })
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        } else{
            console.log('email sent: '+info.response)
        }
    })
}

module.exports = sendEmail;