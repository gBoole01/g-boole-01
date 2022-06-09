import { NextApiRequest, NextApiResponse } from 'next'
import { SITE_PROPS } from '../../lib/constants';
import getMailTransport from '../../lib/getMailTransport';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;
    const { name, email, message } = body;

    const errors = {
        name: false,
        email: false,
        emailFormat: false,
        message: false,
    };
    let isValid = true;

    if (name.length <= 0) {
        errors.name = true;
        isValid = false;
    }

    if (email.length <= 0) {
        errors.email = true;
        isValid = false;
    }

    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        errors.emailFormat = true;
        isValid = false;
    }

    if (message.length <= 0) {
        errors.message = true;
        isValid = false;
    }
    if (!isValid) { res.status(401).json({ error: true, errors }) }

    const transporter = getMailTransport();
    const response = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.SMTP_CONTACT_MAILBOX,
        subject: `Demande de contact depuis ${SITE_PROPS.siteName}`,
        text: message,
        html: `<div>${message}</div>`,
        headers: {}
    });

    if (!response) { res.status(500).json({ error: true }) }

    res.status(200).json({ data: 'OK'});
}

export default handler;