const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "snd2vasundhara@gmail.com",
      pass: "aded ikjv dnlr aqzr"
   }
});

const mailOptions = {
   from: "snd2vasundhara@gmail.com",
   to: ";snd2vishnu@gmail.com",
   subject: "Mail a friend,Assignment 4",
   html: "Nodemailer Test"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});

