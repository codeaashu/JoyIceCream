  import React from "react";
import localFont from "next/font/local";
import ellipseImg from "../../app/assets/MOBILE/HOME/Ellipse.png";
import Image from "next/image";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const signatie = localFont({
  src: "../../app/fonts/Signatie.otf",
  weight: "100 900",
});

function Footer() {
  return (
    <div className="z-10 w-full h-auto  bg-gradient-to-b from-red-900 to-red-950 flex items-center pb-10 justify-center text-white overflow-hidden">
      <div className="flex flex-col justify-around items-center gap-5">
        <div className=" flex flex-col gap-5   items-center">
          <h1
            className={`text-[3.57rem] lg:text-6xl ${thunder.className} pt-10 font-semibold text-center uppercase leading-none lg:leading-[1] w-[24.12rem] md:w-[27rem] lg:w-[30rem] text-white`}
          >
            bringing joy to every moment with love
          </h1>
          <h1 className="w-[19rem] lg:w-[21rem] text-center uppercase text-sm font-semibold text-white">
            Discover happiness in every purchase. Shop now and make every moment
            joyful!
          </h1>
          <div className=" uppercase text-[0.7rem] lg:text-xs flex  items-center gap-7 lg:gap-10 mt-5 text-white">
            <a href="https://www.instagram.com/joyicecreamsofficial/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">instagram</a>
            <a href="https://www.facebook.com/JoyIceCreams/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">facebook</a>
            <a href="https://twitter.com/joyicecreams" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">twitter</a>
            <a href="https://www.pinterest.com/joyicecreams/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">pinterest</a>
          </div>
          <h1
            className={`${signatie.className} text-3xl lg:text-4xl mt-16 font-semibold text-white`}
          >
            Shri LC Java
          </h1>
        </div>
        {/* <Image src={ellipseImg} alt="half red circle" className="w-full lg:w-[40%]  h-auto" /> */}
      </div>
    </div>
  );
}

export default Footer;
