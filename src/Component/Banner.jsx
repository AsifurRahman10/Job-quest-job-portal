import React from "react";
import bannerOne from "../assets/banner-happy.jpg";
import bannerTwo from "../assets/banner-happy-2.jpg";
import { motion } from "motion/react";
import "animate.css";

export const Banner = () => {
  return (
    <div className="flex p-4 items-center gap-10 lg:gap-6 flex-col lg:flex-row">
      <div className="flex-1">
        <div className=" animate__animated animate__fadeInUp">
          <h2 className="text-6xl font-bold ">
            One
            <span className="text-[#3b65f5]"> Stop Solution</span> for getting
            Your Next Job
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Discover your next career move with our comprehensive job portal,
            connecting talent with top opportunities. Empower your future and
            land the job you deserve today!
          </p>
        </div>
        <div>
          <div className="w-full mt-10">
            <div className="relative">
              <input
                className="w-full h-14 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search job name / company name"
              />
              <button
                className="absolute top-[10px] right-3 flex bg-[#3b65f5] font-bold items-center rounded bg-slate-800 py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 ml-10">
        <motion.img
          animate={{ y: [0, 30, 50, 20, 0] }}
          transition={{
            duration: 6,
            delay: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          className="w-2/3 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-[#3b65f5]"
          src={bannerOne}
          alt=""
        />
        <motion.img
          animate={{ x: [100, 120, 150, 120, 100] }}
          transition={{
            duration: 6,
            delay: 2,
            ease: "linear",
            repeat: Infinity,
          }}
          className="w-2/3 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-[#3b65f5]"
          src={bannerTwo}
          alt=""
        />
      </div>
    </div>
  );
};
