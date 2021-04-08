import React, { useState } from "react";

import { Transition } from "@headlessui/react";
import "react-captchaa/dist/index.css";

import { About, Bullet, Email } from "./Page";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(false);
  return (
    <div className=" flex flex-col h-screen justify-between">
      <header className="py-2 bg-headerKaBaap position-absolute">
        <div className="max-w-7xl mx-auto">
          <div className=" items-center justify-between h-6">
            <div className=" items-center">
              <h1 className="text-xm font-bold text-gray-200 cursor-default">
                +49 30 2356 8139
              </h1>
            </div>
          </div>
        </div>
      </header>
      <header className="py-2 bg-header position-absolute">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <div className="">
                <h1 className="text-xxl font-bold text-gray-200 cursor-default">
                  PU BERLIN
                </h1>
              </div>
              <div onClick={() => setLang(!lang)} className="pl-8">
                {lang ? (
                  <h1 className="cursor-pointer hover:bg-headerHover text-white px-3 py-2 rounded-md text-sm font-medium">
                    German
                  </h1>
                ) : (
                  <h1 className="cursor-pointer hover:bg-headerHover text-white px-3.5 py-2 rounded-md text-sm font-medium">
                    English
                  </h1>
                )}
              </div>
              <div className="hidden md:block item-end">
                <div className="pl-96 ml-10 flex items-baseline space-x-4">
                  <a
                    href="/#about"
                    className="hover:bg-headerHover text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="/#services"
                    className="hover:bg-headerHover text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>

                  <a
                    href="/#contact"
                    className="hover:bg-headerHover text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>

                  <a
                    href="/imprint"
                    className="text-gray-300 hover:bg-headerHover hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Imprint
                  </a>

                  <a
                    href="/privacy"
                    className="text-gray-300 hover:bg-headerHover hover:text-white px-10 py-2 rounded-md text-sm font-medium"
                  >
                    Privacy
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/#about"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="/#services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>

                <a
                  href="/#contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                <a
                  href="/Imprint"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Imprint
                </a>

                <a
                  href="/Privacy"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Privacy
                </a>
              </div>
            </div>
          )}
        </Transition>
      </header>
      <main className="flex-grow ">
        <section id="about">
          <header>
            <div className="top-10 md:top-40 relative mx-auto py-6 px-6 md:px-40">
              <h1 className="text-3xl text-center md:text-left  font-bold text-gray-900">
                ABOUT US
              </h1>
            </div>
          </header>
        </section>
        <main>
          <div className="">
            <About />
          </div>
        </main>
        <section id="services">
          <header>
            <div className="top-10 md:top-40 relative mx-auto py-6 px-6 md:px-40">
              <h1 className="text-3xl text-center md:text-left  font-bold text-gray-900">
                OUR SERVICES
              </h1>
            </div>
          </header>
        </section>
        <main>
          <div className="">
            <Bullet />
          </div>
        </main>
        <section id="contact">
          <header>
            <div className="top-10 md:top-40 relative mx-auto py-6 px-6 md:px-40">
              <h1 className="text-3xl text-center md:text-left  font-bold text-gray-900">
                CONTACT US
              </h1>
            </div>
          </header>
        </section>
        <main>
          <div>
            <Email />
          </div>
        </main>
      </main>

      <footer className="py-10  text-white bg-footer">
        <div className="flex flex-row px-44">
          <div>
            <h1 className="text-xl  text-left  font-bold  pb-10">Address</h1>
            <p>Erasmusstrasse 10553 Berlin</p>
          </div>
          <div className="px-20">
            <h1 className="text-xl text-left  font-bold pb-10">Contact</h1>
            <p>Email: info@pu-berlin.com</p>
            <p>Phone: +49 30 2356 8139</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
