"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { relative } from "path";

const Header = () => {
  return (
    <header className="mx-auto w-full h-16 flex bg-white px-30 items-center justify-center shadow-sm">
      <div className="mx-auto w-full flex flex-row justify-between items-center px-20">
        <div className="flex items-center justify-center">
          <h1 className="font-extrabold text-3xl text-gray-700">Sangrilla</h1>
        </div>
        <div className="flex items-center justify-center p-2 m-2">
          <nav className="flex items-center justify-around p-2 mx-auto">
            <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
              Sign In
            </a>
            <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
              Join Now
            </a>
            <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
              Find Reservation
            </a>
            <Menu
              as="div"
              className=" px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700"
            >
              <div>
                <Menu.Button>Language</Menu.Button>
              </div>
              <Transition>
                <Menu.Items>
                  <Menu.Item>
                    <a>English</a>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
              SGD
            </a>
            <a className="px-2 cursor-pointer text-blue-700 font-bold text-sm hover:text-gray-700">
              Phone
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
