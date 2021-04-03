import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { About, Bullet, Email } from "./Page";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-scroll";
import { Headroom } from "react-headroom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div class="flex flex-col h-screen">
        <nav className="py-2 bg-header position-absolute">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="">
                  <h1 className="text-xxl font-bold text-gray-200 cursor-default">
                    PU BERLIN
                  </h1>
                </div>
                <div className="hidden md:block item-end">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="/#about"
                      className="hover:bg-headerHover text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </a>

                    <a
                      href="/#services"
                      className="hover:bg-headerHover text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Services
                    </a>

                    <a
                      href="/#contact"
                      className="text-gray-300 hover:bg-headerHover hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </a>

                    <a
                      href="/imprint"
                      className="text-gray-300 hover:bg-headerHover hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Imprint
                    </a>

                    <a
                      href="/privacy"
                      className="text-gray-300 hover:bg-headerHover  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Team
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Reports
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>
        <div className="flex-1 overflow-y-auto">
          <section id="about">
            <header>
              <div className="top-40 relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl text-center font-bold text-gray-900">
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
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl text-center font-bold text-gray-900">
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
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl text-center font-bold text-gray-900">
                  CONTACT US
                </h1>
              </div>
            </header>
          </section>
          <main>
            <div className="">
              <Email />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
