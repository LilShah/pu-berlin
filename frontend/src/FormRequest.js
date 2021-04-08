import React, { useState, useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

function FormRequest() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    loadCaptchaEnginge(6);
  });
  const doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  const submitRequest = async (e) => {
    e.preventDefault();
    this.doSubmit();
    setName(document.getElementById("nameField").value);
    setEmail(document.getElementById("emailField").value);
    setMessage(document.getElementById("messageField").value);
    console.log({ name, email, message });
    const response = await fetch("/access", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Message Sent.");
      this.resetForm();
    } else if (resData.status === "fail") {
      alert("Message failed to send.");
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
                className="Placeholder"
                class="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 w-10 bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
