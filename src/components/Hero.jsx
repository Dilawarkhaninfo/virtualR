import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
function Hero() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR buil tool{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for Developer
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intutive development tool. Get started today and turn your imaginaion
        into immersive realiy!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start to free
        </a>
        <a href="#" className=" border py-3 px-4 mx-3 rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex mt-5 justify-center">
        <video
          loop
          muted
          autoPlay
          className="rounded-lg w-1/2 border border-orange-700 mx-2 shadow-orange-400 my-4"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          loop
          muted
          autoPlay
          className="rounded-lg w-1/2 border border-orange-700 mx-2 shadow-orange-400 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your Browser does not support this video Tag.
        </video>
      </div>
    </div>
  );
}

export default Hero;
