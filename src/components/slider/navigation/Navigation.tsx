"use client";

const Navigation = () => {
  return (
    <div className="flex flex-row items-end justify-center w-full h-10 pt-2 px-5 bg-gray-800">
      <div className="mx-4 h-fit cursor-pointer hover:bg-gray-100 ">
        <a className="px-2 bp-2 h-full w-full  text-white text-md font-sans font-semibold hover:text-black">
          ABOUT
        </a>
      </div>
      <div>
        <a className="mx-4 text-white text-md font-sans font-semibold cursor-pointer">
          ROOMS & SUITES
        </a>
      </div>
      <div>
        <a className="mx-4 text-white text-md font-sans font-semibold cursor-pointer">
          DINING
        </a>
      </div>
      <div>
        <a className="mx-4 text-white text-md font-sans font-semibold cursor-pointer">
          EXPERIENCE
        </a>
      </div>
      <div>
        <a className="mx-4 text-white text-md font-sans font-semibold cursor-pointer">
          EVENTS
        </a>
      </div>
      <div>
        <a className="mx-4 text-white text-md font-sans font-semibold cursor-pointer">
          GALLERY
        </a>
      </div>
      <div>
        <a className="mx-4 text-white text-md font-sans font-semibold cursor-pointer">
          OFFERS
        </a>
      </div>
      <div>
        <a className="mx-4 text-white text-md font-sans font-semibold cursor-pointer">
          MORE
        </a>
      </div>
      <div className="ml-10 border-white">
        <a className="px-2 text-white text-md font-sans font-medium outline outline-1 cursor-pointer">
          FIND A HOTEL
        </a>
      </div>
    </div>
  );
};

export default Navigation;
