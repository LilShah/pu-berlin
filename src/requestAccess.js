import React from "react";

const FormRequest = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-200"></div>
      <div className="w-full max-w-sm m-auto flex flex-col my-32">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-gray-200 border">
          <h2 className="text-2xl pt-6 pb-10 text-center font-medium text-gray-800">
            Request for early access
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Your Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              placeholder="Email Address"
              value="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message For Us
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              type="text"
              placeholder="Tell us your purpose"
              value="message"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 mt-6 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send A Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRequest;
