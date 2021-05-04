import "./App.css";
import { React } from "react";
import FormRequest from "../FormRequest.js";

export const textStyle = {
  position: "relative",
  height: "80vh",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: "normal",
  color: "#363535",
};

export function About(props) {
  return (
    <div style={textStyle} className="top-10 md:top-40 relative px-6 md:px-40">
      <p className="text-justify text-base md:text-2xl md:w-6/12 ">
        {props.lang
          ? "Die Pu-Berlin ist eine im Jahr 2008 gegründete Beratungsgesellschaft mit Sitz in Berlin Deutschland. Sie ist inhabergeführt und hat sich zum Ziel gesetzt die Mandate mit höchster Vertrauenswürdigkeit und Kompetenz zu betreuen."
          : "The Pu-Berlin is a consulting company founded in 2008 and based in Berlin Germany. It’s run by the owner himself and his Team. We look after the highest level of trust and confidence in our work as well with our clients."}
      </p>
      <div className="py-2" />
      <p className="text-justify text-base md:text-2xl md:w-6/12 ">
        {props.lang
          ? "Unser Ziel ist es unseren Klienten höchste Sicherheit in Ihren finanziellen Fragen zu bieten. Wir stehen für Vertrauen und Zuverlässigkeit. Die Mandate werden selektiert und nachdem persönliche Gespräche geführt worden sind, im beidseitigen Interesse auf einer transparenten Grundlage begonnen."
          : "Our goal is to offer our clients the level of security in their financial questions they need. We stand for trust and reliability. All projects are selected and, after personal contacts have been held, started with transparency and trust."}
      </p>
      <div className="py-2" />
      <p className="text-justify text-base md:text-2xl md:w-6/12 ">
        {props.lang
          ? "Nicht die absolute Anzahl der Mandate ist für uns entscheidend, sondern die Qualität die wir jedem einzelnen Klienten entgegenbringen ist für uns entscheidend."
          : "It is not the absolute number of projects that is important for us, but the quality we offer to each individual client is decisive for us."}
      </p>
      <div className="py-2" />
      <p className="text-justify text-base md:text-2xl md:w-6/12 ">
        {props.lang
          ? ""
          : "Our success is the result of understanding client’s needs, tailoring corporate structures in order to satisfy the needs of our clients using legal entities and good tax planning both in Berlin Germany and abroad."}
      </p>
    </div>
  );
}
export function Bullet(props) {
  return (
    <div style={textStyle} className="top-10 md:top-40 relative px-6 md:px-40">
      <ul className="list-disc">
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          {props.lang
            ? "Unsere Leistungen sind individuell und auf jedes Mandat zugeschnitten. Wir arbeiten nicht nach einem Schema, sondern definieren unseren Beratungsbedarf mit dem Klienten in gemeinsamen Gesprächen. Kernleistungen sind die:"
            : "Our services are individual and tailored to each client and the needs of the client. We do not work according to a scheme, but rather define our consulting needs with the client in joint discussions. Our core services are:"}
        </p>
        <div className="py-2" />
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          <li>
            {props.lang
              ? "Investmentberatung im Immobilienbereich in Berlin / Deutschland und im Mittelmeerraum."
              : "Investment advice and service in real estate in Berlin / Germany and in the Mediterranean region."}
          </li>
        </p>
        <div className="py-2" />
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          <li>
            {props.lang
              ? "Gründungsberatung für Start Up´s in Berlin/ Markteintrittsanalyse und Übernahme sämtlicher administrativer Vorgänge ( Finanzämter, Gewerbeamt und andere Behörden). Gerne übernehmen wir für Sie Ihre Postadresse."
              : "Start-up advice for opening a company in Berlin / market entry analysis and takeover of all administrative processes (tax offices, trade office and other authorities). We can take over your postal address for you."}
          </li>
        </p>
        <div className="py-2" />
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          <li>
            {props.lang
              ? "-Beratung und Kontrolle der anvertrauten Projekte durch unser starkes Netzwerk aus Anwälten und Steuerberatern sowie internationalen Kontakten"
              : "Advice and control of the entrusted projects through our strong german and international network of lawyers and tax advisors as well as international contacts"}
          </li>
        </p>
        <div className="py-2" />
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          {props.lang
            ? "Unsere Leistungen sind transparent und zielorientiert. Die Honorare sind im Vorfeld mit allen Seiten abgesprochen und verhältnismäßig."
            : "Our services are transparent and goal-oriented. The fees are agreed with all parties in advance and are proportionate."}
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
