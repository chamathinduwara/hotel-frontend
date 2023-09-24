"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

// icons import
import { IoMdArrowDropdown } from "react-icons/io";

const Languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Chinese" },
  { id: 3, name: "Malay" },
  { id: 4, name: "Tamil" },
];

const Currency = [
  { id: 1, name: "USD" },
  { id: 2, name: "MYR" },
  { id: 3, name: "SGD" },
  { id: 4, name: "EUR" },
  { id: 5, name: "GBP" },
  { id: 6, name: "AUD" },
  { id: 7, name: "CAD" },
];

const Header = () => {
  const [selected, setSelected] = useState(Languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(Currency[0]);

  return (
    <header className="mx-auto w-full h-16 flex bg-white px-30 items-center justify-center shadow-sm">
      <div className="mx-auto w-full flex flex-row justify-between items-center px-20">
        <div className="flex items-center justify-center">
          <h1 className="font-extrabold text-3xl text-gray-700">Sangrilla</h1>
        </div>
        <div className="flex items-center justify-center p-2 m-2">
          <nav className="flex items-center justify-around p-2 mx-auto">
            <div>
              <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
                Sign In
              </a>
            </div>

            <div>
              <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
                Join Now
              </a>
            </div>
            <div>
              <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
                Find Reservation
              </a>
            </div>

            <Listbox value={selected} onChange={(value) => setSelected(value)}>
              {({ open }) => (
                <div>
                  <Listbox.Button className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
                    {selected.name}
                    <IoMdArrowDropdown className="inline-block ml-1" />
                  </Listbox.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-32 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {Languages.map((language) => (
                        <Listbox.Option
                          key={language.id}
                          className={({ active }) =>
                            `${
                              active
                                ? "text-amber-900 bg-amber-100"
                                : "text-gray-900"
                            }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                          }
                          value={language}
                        >
                          {({ selected, active }) => (
                            <Fragment>
                              <span
                                className={`${
                                  selected ? "font-medium" : "font-normal"
                                } block truncate`}
                              >
                                {language.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? "text-amber-600" : "text-amber-600"
                                  }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              ) : null}
                            </Fragment>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              )}
            </Listbox>
            <Listbox
              value={selectedCurrency}
              onChange={(value) => setSelectedCurrency(value)}
            >
              {({ open }) => (
                <div>
                  <Listbox.Button className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
                    {selectedCurrency.name}
                    <IoMdArrowDropdown className="inline-block ml-1" />
                  </Listbox.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-32 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {Currency.map((currency) => (
                        <Listbox.Option
                          key={currency.id}
                          className={({ active }) =>
                            `${
                              active
                                ? "text-amber-900 bg-amber-100"
                                : "text-gray-900"
                            }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                          }
                          value={currency}
                        >
                          {({ selected, active }) => (
                            <Fragment>
                              <span
                                className={`${
                                  selected ? "font-medium" : "font-normal"
                                } block truncate`}
                              >
                                {currency.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? "text-amber-600" : "text-amber-600"
                                  }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1
                                      0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              ) : null}
                            </Fragment>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              )}
            </Listbox>
            <div>
              <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
                Phone
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
