import React, { Component } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

class CaptchaTest extends Component {
  componentDidMount() {
    loadCaptchaEnginge(6);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  render() {
    return (
      <div className="bg-gray-500 w-80 rounded">
        <div className="pl-16 pt-5">
          <LoadCanvasTemplateNoReload />
        </div>
        <div className="flex flex-row">
          <div className="pt-20 pl-6">
            <input
              className="Placeholder"
              class="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              placeholder="   Enter Captcha Value"
              id="user_captcha_input"
              name="user_captcha_input"
              type="text"
            ></input>
          </div>

          <div className="pt-20 pb-6 pl-3">
            <div>
              <button
                class="bg-header hover:bg-headerKaBaap text-white font-bold py-2 px-4 rounded"
                onClick={() => this.doSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaptchaTest;
