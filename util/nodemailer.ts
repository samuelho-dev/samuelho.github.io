import nodemailer from 'nodemailer';

const email = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
