import nodemailer from 'nodemailer';

const hostname = process.env.SMTP_MAIL_HOSTNAME;
const username = process.env.SMTP_MAIL_USERNAME;
const password = process.env.SMTP_MAIL_PASSWORD;

function getMailTransport() {
    const transporter = nodemailer.createTransport({
        port: 587,
        host: hostname,
        auth: {
            user: username,
            pass: password,
        },
        secure: false,
        requireTLS: true,
    });
    
    return transporter
}

export default getMailTransport;