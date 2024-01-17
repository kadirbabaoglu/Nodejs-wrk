const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    //https://ethereal.email/
    
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ari47@ethereal.email',
        pass: '4v2ts91evbEJkhv5Cs'
    }
  });

const toUsers = ['test@outlook.com', 'test@gmail.com', 'test@hotmail.com'];


var htmlTemplate = `<html lang="en">
<head>
    <title>Multiple Test E-mail</title>
</head>
<body>
    <p>Multiple Test E-mail</p>
    <p>--------------------</p>
    <strong>${emailMessage}</strong>
</body>
</html>
`;

const mailOption = {
    from: "ari47@ethereal.email",
    to: toUsers,
    subject: "Multiple Test E-mail",
    html: htmlTemplate,
}

transporter.sendMail(mailOption, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Success' + info.response)
    }
})

