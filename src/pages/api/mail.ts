import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body } = req;

  const { name, email, message } = JSON.parse(body);
  if (!name || !email || !message) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New message from ${name} - ${email}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email. Please try again.' });
  }
}
