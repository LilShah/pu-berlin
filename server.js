const express = require("express");
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000;

app.post("/SendEmail", (req, res) => {
  var messageJSON = req.body;
  var text = "";
  for (const [key, value] of Object.entries(messageJSON)) {
    text += key + ": " + value + "\n";
  }

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "epicbot923@gmail.com",
      pass: "Epicbot_123",
    },
  });

  const mailOptions = {
    from: "epicbot923@gmail.com",
    to: "sv.halilaydin@gmail.com",
    subject: "Notification",
    text: text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.end(info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
