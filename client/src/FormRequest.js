import React, { useEffect } from "react";
import * as emailjs from "emailjs-com";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

let creds = require("./credentials.json");

function FormRequest(props) {
  useEffect(() => {
    loadCaptchaEnginge(6);
  });

  const doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;
    if (validateCaptcha(user_captcha) === true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
      return true;
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
      return false;
    }
  };

  const submitRequest = async (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: document.getElementById("nameField").value,
      to_name: creds.to_email,
      subject:
        "New message regarding PU-Berlin from " +
        document.getElementById("nameField").value,
      message: document.getElementById("messageField").value,
    };
    console.log(templateParams);
    if (doSubmit()) {
      emailjs
        .send(
          creds.service_id,
          creds.template_id,
          templateParams,
          creds.user_id
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div>
      <div className="w-full max-w-sm m-auto flex flex-col my-32">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-gray-200 border"
          onSubmit={submitRequest}
        >
          <h2 className="text-2xl pt-6 pb-10 text-center font-medium text-gray-800">
            Leave us a message
          </h2>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="nameField"
              name="yourName"
              placeholder="Your name"
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
              placeholder="Your message"
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
