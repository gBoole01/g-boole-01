import { NextApiRequest, NextApiResponse } from 'next'
import { SITE_PROPS } from '../../lib/constants';
import getMailTransport from '../../lib/getMailTransport';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;
    const { name, email, message } = body;

    if (!name) { res.status(401).json({ data: 'No name provided'}) }
    if (!email) { res.status(401).json({ data: 'No email provided'}) }
    if (!message) { res.status(401).json({ data: 'No message provided'}) }

    const transporter = getMailTransport();
    const response = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.SMTP_CONTACT_MAILBOX,
        subject: `Demande de contact depuis ${SITE_PROPS.siteName}`,
        text: message,
        html: `<div>${message}</div>`,
        headers: {}
    });

    if (!response) { res.status(500).json({ data: 'Something went wrong while sending message'}) }

    res.status(200).json({ data: 'OK'});
}

export default handler;