"use client";

import Image from "next/image";
import Navigation from "./navigation/Navigation";
import Popup from "./navigation/popup/Popup";
import Search from "./search/Search";

// background image
// import background from "@/assets/images/background.jpg";
import bg1 from "@/public/background/bg1.jpg";

// import css file
import "./Slider.module.css";

const Slider = () => {
  return (
    <div className="relative z-10 h-[36rem]">
      <div className="absolute z-20 bottom-20  left-1/2">
        <Search />
      </div>
      <div className="relative flex flex-col bg">
        <Navigation />
        <div className="">
          <Image
            src="/background/bg2.jpg"
            alt="background"
            width={1920}
            height={1080}
            className="flex flex-col h-[32rem] max-w-full bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
