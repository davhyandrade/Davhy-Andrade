import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from 'nodemailer';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { method } = request;

  const { email, subject, content } = request.body;

  if (method === 'POST') {
    try {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.USERMAIL,
          pass: process.env.PASSMAIL,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      let info = await transporter.sendMail({
        from: email,
        to: process.env.USERMAIL,
        subject: subject,
        text: 'Seu código de verificação é:',
        html: `
        <section>
          <div>
            <p>${content}</p>
          </div>
        </section>
        `,
      });

      response.status(200).json({ msg: 'Código enviado para o seu E-mail!', info });
    } catch (error) {
      response.status(500).json({ msg: 'Aconteceu um erro no servidor!', error, pass: process.env.PASSMAIL, email: process.env.USERMAIL });
      console.log(error);
    }
  }
}