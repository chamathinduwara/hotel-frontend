"use client";

// import
import Image from "next/image";
import { useState } from "react";

type ItemProps = {
  id: number;
  url: string;
  alt: string;
};

const Item = ({ id, url, alt }: ItemProps) => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup((popup) => !popup);
  };
  return (
    <div key={id} className="relative">
      <button
        onClick={togglePopup}
        className="relative focus:outline focus:outline-2 focus:outline-gray-900 p-0.5"
      >
        <div className="absolute h-full w-full m-0">
          <div className="flex items-end justify-center h-full w-full m-0 transition duration-500  hover:-translate-y-1/3">
            <p className="text-white w-full font-bold text-xl p-10">HELLO</p>
          </div>
        </div>
        <Image
          src={url}
          alt={alt}
          width={450}
          height={150}
          className="h-[18rem]"
        />
      </button>

      {popup && (
        <div className="absolute w-full h-full bg-gray-400">
          <p className="text-red-700 font-bold text-2xl">hellow world</p>
        </div>
      )}
    </div>
  );
};

export default Item;
