const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'saimanikantapatro8@gmail.com', // Replace with your Gmail email
    pass: 'saimani30', // Replace with your Gmail password
  },
});

app.post('/send', (req, res) => {
  const { senderEmail, subject, message } = req.body;

  const mailOptions = {
    from: senderEmail, // Use sender's email as the "from" address
    to: 'saimanikantapatro8@gmail.com', // Replace with the recipient's email
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send({ error: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({ message: 'Email sent' });
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
