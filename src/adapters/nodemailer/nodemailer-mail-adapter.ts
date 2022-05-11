import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
  user: "83ce9008fc2763",
  pass: "31d97b864198a7"
    // user: '9955de172fc7f2',
    // pass: '2bf06a7c80ed15',
  },
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Maria <maria@maria.com>',
    subject,
    html: body,
  });
  }
}
