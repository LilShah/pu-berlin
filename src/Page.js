import "./App.css";
import { React, useState } from "react";

const textStyle = {
  position: "relative",
  width: "60vw",
  left: "20vw",
  height: "80vh",
  textAlign: "left",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "24px",
  lineHeight: "100%",
  color: "#363535",
};

export function About() {
  const [lang, setLang] = useState(0);

  return (
    <div style={textStyle} class="top-40 relative">
      <p class="text-justify">
        The Pu-Berlin is a consulting company founded in 2008 and based in
        Berlin Germany. It’s run by the owner himself and his Team. We look
        after the highest level of trust and confidence in our work as well with
        our clients.
      </p>
      <p class="text-justify">
        Our goal is to offer our clients the level of security in their
        financial questions they need. We stand for trust and reliability. All
        projects are selected and, after personal contacts have been held,
        started with transparency and trust.
      </p>
      <p class="text-justify">
        It is not the absolute number of projects that is important for us, but
        the quality we offer to each individual clientimport Navbar from
        './Navbar'; is decisive for us.
      </p>
      <p class="text-justify">
        Our success is the result of understanding client’s needs, tailoring
        corporate structures in order to satisfy the needs of our clients using
        legal entities and good tax planning both in Berlin Germany and abroad.
      </p>
    </div>
  );
}
export function Bullet() {
  return (
    <div style={textStyle}>
      <ul class="list-disc">
        <p class="text-justify">
          <li>
            Our services are individual and tailored to each client and the
            needs of the client. We do not work according to a scheme, but
            rather define our consulting needs with the client in joint
            discussions.
          </li>
        </p>
        <p class="text-justify">
          <li>
            Investment advice and service in real estate in Berlin / Germany and
            in the Mediterranean region.
          </li>
        </p>
        <p class="text-justify">
          <li>
            Start-up advice for opening a company in Berlin / market entry
            analysis and takeover of all administrative processes (tax offices,
            trade office and other authorities). We can take over your postal
            address for you.
          </li>
        </p>
        <p class="text-justify">
          <li>
            Advice and control of the entrusted projects through our strong
            german and international network of lawyers and tax advisors as well
            as international contacts
          </li>
        </p>
        <p class="text-justify">
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
    <div style={textStyle}>
      <p>
        Tempor ea aliqua ut id aliquip dolor velit occaecat proident ea. Culpa
        commodo in consequat est qui mollit officia quis. Sunt officia
        consectetur aliquip dolor magna qui fugiat quis consequat aliqua esse
        aliqua cupidatat. Dolore ullamco reprehenderit Lorem duis minim nulla
        fugiat quis et aute ex sint sit. Commodo ullamco ad dolore laborum est
        eu proident aliqua consectetur eiusmod labore. Reprehenderit laborum
        ipsum qui ex. Do velit minim reprehenderit et mollit ut est ipsum
        aliquip laborum deserunt ex. Ut esse cupidatat anim eu voluptate
        laborum. Et officia dolor consequat do nisi deserunt dolor. Eiusmod
        minim ad voluptate magna cupidatat proident do in Lorem irure do duis
        dolor. Ipsum tempor exercitation nisi Lorem magna. Duis ea pariatur
        cupidatat qui. Laborum fugiat aliquip elit commodo. Proident dolor
        dolore enim incididunt adipisicing mollit dolor sit reprehenderit
        cupidatat nisi cillum ea cupidatat. Laborum velit deserunt quis veniam
        ullamco officia ea id excepteur mollit. Cupidatat qui nisi eiusmod
        tempor Lorem pariatur esse. Laborum eiusmod ipsum incididunt
        reprehenderit nisi. Ea enim laborum enim amet esse tempor sunt aliqua
        cillum sunt. Laboris amet ea velit veniam irure. Cillum ad amet amet
        cillum. Elit est in ut exercitation ipsum cillum velit deserunt magna
        sit dolor. Laborum aliquip sit consequat cillum ut nostrud esse esse sit
        fugiat proident velit. Consectetur nostrud nulla commodo labore esse
        proident ipsum dolore sint nostrud pariatur ullamco dolore. Cillum duis
        dolore laboris officia enim duis sunt. Veniam fugiat ipsum eu nulla
        deserunt duis nulla pariatur enim quis id duis. Veniam elit sint
        proident qui cupidatat ex commodo quis. Aliqua reprehenderit irure non
        esse velit laborum pariatur elit sit elit pariatur incididunt dolor
        occaecat. Quis quis elit sint mollit eiusmod aute nulla ea. Cupidatat ex
        cupidatat excepteur nostrud. Occaecat veniam sit aliquip adipisicing
        labore consectetur incididunt qui officia. Irure tempor aute quis qui
        fugiat aliqua veniam excepteur Lorem excepteur adipisicing. Amet enim
        magna proident est velit minim elit.
      </p>
    </div>
  );
}
