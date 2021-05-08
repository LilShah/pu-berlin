import React, { useState } from "react";

import { About, Bullet, Email } from "./Components/Page";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Home() {
  const [useGerman, setLang] = useState(false);
  const setLangFromChild = (lang) => {
    setLang(lang);
  };
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Header setLangOfParent={setLangFromChild} />
      <main className="flex-grow ">
        <section id="about">
          <header>
            <div className="top-10 md:top-40 relative mx-auto py-6 px-6 md:px-40">
              <h1 className="text-3xl text-center md:text-left  font-bold text-gray-900">
                {useGerman ? "ÜBER UNS" : "ABOUT US"}
              </h1>
            </div>
          </header>
        </section>
        <main>
          <div className="">
            <About lang={useGerman} />
          </div>
        </main>
        <section id="services">
          <header>
            <div className="top-10 md:top-40 relative mx-auto py-6 px-6 md:px-40">
              <h1 className="text-3xl text-center md:text-left  font-bold text-gray-900">
                {useGerman ? "LESITUNGEN" : "SERVICES"}
              </h1>
            </div>
          </header>
        </section>
        <main>
          <div className="">
            <Bullet lang={useGerman} />
          </div>
        </main>
        <section id="contact">
          <header>
            <div className="top-10 md:top-40 relative mx-auto py-6 px-6 md:px-40">
              <h1 className="text-3xl text-center md:text-left  font-bold text-gray-900">
                {useGerman ? "KONTAKT" : "CONTACT"}
              </h1>
            </div>
          </header>
        </section>
        <main>
          <div>
            <Email lang={useGerman} />
          </div>
        </main>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
