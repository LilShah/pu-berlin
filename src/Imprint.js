import { React, useState } from "react";
import Header from "./Header";
import { textStyle } from "./Page";
const Imprint = () => {
  const [useGerman, setLang] = useState(false);
  const setLangFromChild = (lang) => {
    setLang(lang);
  };
  return (
    <div>
      <Header setLangOfParent={setLangFromChild} />
      <header>
        <div className="top-10 md:top-40 relative mx-auto py-6 px-6 md:px-40">
          <h1 className="text-3xl text-center md:text-left  font-bold text-gray-900">
            {useGerman ? "" : "PRIVACY"}
          </h1>
        </div>
      </header>
      <div
        style={textStyle}
        className="top-10 md:top-40 relative px-6 md:px-40"
      >
        <p className="text-justify text-base md:text-2xl md:w-6/12">
          {useGerman
            ? "Unsere Leistungen sind individuell und auf jedes Mandat zugeschnitten. Wir arbeiten nicht nach einem Schema, sondern definieren unseren Beratungsbedarf mit dem Klienten in gemeinsamen Gesprächen. Kernleistungen sind die:"
            : "Our services are individual and tailored to each client and the needs of the client. We do not work according to a scheme, but rather define our consulting needs with the client in joint discussions. Our core services are:"}
        </p>
      </div>
    </div>
  );
};
export default Imprint;
