// import { prisma } from './prisma';
// import nodemailer from 'nodemailer';
import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
console.log('HTTP server running!');
});
// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "83ce9008fc2763",
//     pass: "31d97b864198a7"
//   }
// });

// foi para o routes
// app.post('/feedbacks', async(req, res) => {
//   // console.log(req.body);
//   // return res.send('Hello World');
//   const {type, comment, screenshot} = req.body;
//   const feedback = await prisma.feedback.create ({
//     data:{
//       type,
//       comment, 
//       screenshot
//     }
//   })
//   await transport.sendMail({
//     from: 'Equipe Feedget <oi@feedget.com>',
//     to: 'Maria <maria@maria.com>',
//     subject: 'Novo Feedback',
//     html: [
//       `<div style:"font-family:sans-serif; font-size: 16px; color: #111;">`,
//       `<p>Tipo Feedback: ${type}</p>`,
//       `<p>Comentário: ${comment}</p>`,
//       '</div>'

//     ].join('\n')
//   });
//   return res.status(201).json({data: feedback});
// });

// app.get('/users', (req, res) => {
//   return res.send('Hello World');
// })

// app.use(cors());
// app.use(express.json());
// app.use(routes);
// app.listen(3333, () => {
// console.log('HTTP server running!');
//  });
// const teste = 1;
// async function asddas() {
//   return "ok2"
// }



