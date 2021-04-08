import "./App.css";
import { React, useState } from "react";

import FormRequest from "./FormRequest.js";

const textStyle = {
  position: "relative",
  height: "80vh",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: "normal",
  color: "#363535",
};

export function About() {
  const [lang, setLang] = useState(0);

  return (
    <div style={textStyle} className="top-10 md:top-40 relative px-6 md:px-40">
      <p className="text-justify text-base md:text-2xl md:w-6/12 ">
        The Pu-Berlin is a consulting company founded in 2008 and based in
        Berlin Germany. It’s run by the owner himself and his Team. We look
        after the highest level of trust and confidence in our work as well with
        our clients.
      </p>
      <p className="text-justify text-base md:text-2xl md:w-6/12 ">
        Our goal is to offer our clients the level of security in their
        financial questions they need. We stand for trust and reliability. All
        projects are selected and, after personal contacts have been held,
        started with transparency and trust.
      </p>
      <p className="text-justify text-base md:text-2xl md:w-6/12 ">
        It is not the absolute number of projects that is important for us, but
        the quality we offer to each individual client is decisive for us.
      </p>
      <p className="text-justify text-base md:text-2xl md:w-6/12 ">
        Our success is the result of understanding client’s needs, tailoring
        corporate structures in order to satisfy the needs of our clients using
        legal entities and good tax planning both in Berlin Germany and abroad.
      </p>
    </div>
  );
}
export function Bullet() {
  return (
    <div style={textStyle} className="top-10 md:top-40 relative px-6 md:px-40">
      <ul className="list-disc">
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          <li>
            Our services are individual and tailored to each client and the
            needs of the client. We do not work according to a scheme, but
            rather define our consulting needs with the client in joint
            discussions.
          </li>
        </p>
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          <li>
            Investment advice and service in real estate in Berlin / Germany and
            in the Mediterranean region.
          </li>
        </p>
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          <li>
            Start-up advice for opening a company in Berlin / market entry
            analysis and takeover of all administrative processes (tax offices,
            trade office and other authorities). We can take over your postal
            address for you.
          </li>
        </p>
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          <li>
            Advice and control of the entrusted projects through our strong
            german and international network of lawyers and tax advisors as well
            as international contacts
          </li>
        </p>
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          <li>
            Our services are transparent and goal-oriented. The fees are agreed
            with all parties in advance and are proportionate.
          </li>
        </p>
      </ul>
    </div>
  );
}
export function Email() {
  return (
    <div style={textStyle} className="top-10 md:top-40 relative px-6 md:px-40">
      <FormRequest />
    </div>
  );
}
