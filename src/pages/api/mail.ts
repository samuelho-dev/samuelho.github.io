import type { NextApiRequest, NextApiResponse } from 'next';
import { mailOptions, transporter } from 'util/nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body } = req;

  const { name, email, subject, message } = JSON.parse(body);
  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `WEBSITE CONTACT ${name} - ${email} : ${subject}`,
      text: message,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email. Please try again.' });
  }
}
