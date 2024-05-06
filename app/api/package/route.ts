// pages/api/requestPackage.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { price, description } = req.body;
      
      // Sending email using nodemailer
      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'your-email@example.com',
          pass: 'your-password',
        },
      });
      
      const mailOptions = {
        from: 'your-email@example.com',
        to: 'remote.zubairdev@gmail.com',
        subject: 'New Package Request',
        text: `Price: ${price}\nDescription: ${description}`,
      };
      
      await transporter.sendMail(mailOptions);

      // Log success and respond with a success message
      console.log('Package request email sent successfully');
      return res.status(200).json({ message: 'Package requested successfully and email sent' });
    } catch (error) {
      console.error('Error processing package request and sending email:', error);
      // Respond with an error message
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Respond with a method not allowed error if the request method is not POST
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
