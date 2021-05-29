import { React, useState } from "react";
import { Transition } from "@headlessui/react";

const Header = ({ setLangOfParent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(false);

  return (
    <div>
      <header className="py-2 bg-headerKaBaap position-absolute">
        <div className="max-w-7xl mx-auto">
          <div className=" items-center justify-between h-6">
            <div className="px-10 md:px-0 items-center">
              <h1 className="text-xm font-bold text-gray-200 cursor-default">
                +49 30 2356 8139
              </h1>
            </div>
          </div>
        </div>
      </header>
      <header className="py-2 bg-header position-absolute pb-2">
        <div className="max-w-7xl mx-auto pl-2 md:pl-0">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <a
                href="/"
                className="cursor-pointer hover:bg-headerHover px-2 text-xxl font-bold text-gray-200 cursor-default rounded-md"
              >
                PU BERLIN
              </a>
              <div
                onClick={() => {
                  let currLang = !lang;
                  setLangOfParent(currLang);
                  setLang(currLang);
                }}
                className="pl-8"
              >
                <div className="position-absolute cursor-pointer hover:bg-headerHover text-white rounded-md text-sm font-medium">
                  {lang ? (
                    <h1 className="px-2 py-2">Deutsche</h1>
                  ) : (
                    <h1 className="px-3 py-2">English</h1>
                  )}
                </div>
              </div>
              <div className="hidden md:block item-end">
                <div className="position-absolute pl-96 ml-10 flex items-baseline ">
                  <a
                    href="/#about"
                    className="min-w-d hover:bg-headerHover text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {lang ? "Über Uns" : "About Us"}
                  </a>

                  <a
                    href="/#services"
                    className="hover:bg-headerHover text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {lang ? "Lesitungen" : "Services"}
                  </a>

                  <a
                    href="/#contact"
                    className="hover:bg-headerHover text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {lang ? "Kontakt" : "Contact"}
                  </a>

                  <a
                    href="/imprint"
                    className="text-gray-300 hover:bg-headerHover hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {lang ? "Impressum" : "Imprint"}
                  </a>

                  <a
                    href="/privacy"
                    className="text-gray-300 hover:bg-headerHover hover:text-white px-10 py-2 rounded-md text-sm font-medium"
                  >
                    {lang ? "Datenschutz" : "Privacy"}
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 pr-4 flex md:hidden">
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
                  {lang ? "Über Uns" : "About Us"}
                </a>

                <a
                  href="/#services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {lang ? "Lesitungen" : "Services"}
                </a>

                <a
                  href="/#contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {lang ? "Kontakt" : "Contact"}
                </a>

                <a
                  href="/imprint"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {lang ? "Impressum" : "Imprint"}
                </a>

                <a
                  href="/privacy"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {lang ? "Datenschutz" : "Privacy"}
                </a>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </div>
  );
};

export default Header;
