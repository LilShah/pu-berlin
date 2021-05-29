const express = require("express");
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
app.use(cors());
const creds = require("./credentials.json");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000;

app.post("/SendEmail", (req, res) => {
  var messageJSON = req.body;
  console.log("Sending mail from server...");
  var text = "";
  for (const [key, value] of Object.entries(messageJSON)) {
    text += key + ": " + value + "\n";
  }

  var transporter = nodemailer.createTransport({
    service: "Yahoo",
    auth: {
      user: creds.from_email,
      pass: creds.from_password,
    },
  });

  const mailOptions = {
    from: creds.from_email,
    to: creds.to_email,
    subject: "PU_BERLIN: Somebody contacted you from your PU-BERLIN website!",
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
