import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import emailjs from "emailjs-com";
import creds from "./credentials.json";

function FormRequest() {
  useEffect(() => {
    loadCaptchaEnginge(6);
  });
  const [emailStatus, setStatus] = React.useState(0);
  let templateParams = {
    name: "",
    email: "",
    message: "",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    toast("Sending mail...");
    /* axios
      .post("/SendEmail", data)
      .then((response) => {
        console.log(response);
        setStatus(2);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        toast("Email sent successfully!");
      }); */
    emailjs
      .send(creds.service_id, creds.template_id, templateParams, creds.user_id)
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Email not sent!");
        }
      );
  };

  const isEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = (e) => {
    templateParams.name = document.getElementById("nameField").value;
    templateParams.email = document.getElementById("emailField").value;
    templateParams.message = document.getElementById("messageField").value;
    e.preventDefault();
    if (!checkCaptcha()) {
      toast.error("Captcha not matched");
      return;
    }
    if (!isEmail(templateParams.email)) {
      toast.error("Wrong email format!");
      return;
    }
    e.target.reset();
    setStatus(1);

    sendEmail(e);
  };

  const checkCaptcha = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;
    if (validateCaptcha(user_captcha)) {
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
      return true;
    } else {
      document.getElementById("user_captcha_input").value = "";
      return false;
    }
  };

  return (
    <div>
      <div className="md: md:w-4/12 flex flex-col md:my-1">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-gray-200 border"
          onSubmit={validate}
        >
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
          />
          <h2 className="text-2xl pt-6 pb-10 text-center font-medium text-gray-800">
            Leave us a message
          </h2>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="nameField"
              name="yourName"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="emailField"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              type="text"
              id="messageField"
              placeholder="Your Message"
              required
            />
          </div>
          <div className="pl-5 pt-5">
            <LoadCanvasTemplateNoReload />
          </div>
          <div className="flex flex-row">
            <div className="pt-3 pl-6">
              <input
                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 w-10 bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                placeholder="Enter Captcha Value"
                id="user_captcha_input"
                name="user_captcha_input"
                type="text"
              ></input>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-header hover:bg-footer text-white font-bold py-2 px-4 mt-6 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send A Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRequest;
