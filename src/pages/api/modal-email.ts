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
        html: `
        <section 
          style="    
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fafafa;
            padding: 20px;
            border: 1px solid #e9e9e9;
            border-radius: 5px;
          "
        >
          <div> 
            <p style="color: #333">${content}</p>
          </div>
        </section>
        `,
      });

      response.status(200).json({ msg: 'E-mail enviado com sucesso!!', info });
    } catch (error) {
      response.status(500).json({ msg: 'Aconteceu um erro no servidor!', error });
      console.log(error);
    }
  }
}