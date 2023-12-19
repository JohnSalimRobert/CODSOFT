import React from "react";
import wishlist from "../assets/Homepage-wishlist.png";
import landingPage from "../assets/Landingpage.png";

const Projects = () => {
  return (
    <div name="project" className="w-full md:h-screen text-[#FAF6F0] bg-[#222831]">
      <div className="max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold">Projects</p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

{/* Card container */}
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
{/* Grid item */}
          <div
          style={{ backgroundImage: `url(${wishlist})` }}
          className="shadow-lg shadow-[#04080f] group containter rounded-md flex justify-center items-center mx-auto content-div"
          >

            <div className="opacity-0 group-hover:opacity-100 w-[20rem]">
              <span className="text-2xl font-bold text-white tracking-wider ">
                MERN Ecommerce Website
              </span>
              <div className="pt-8 text-center">
              <a href="">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
          style={{ backgroundImage: `url(${landingPage})` }}
          className="shadow-lg shadow-[#04080f] group containter rounded-md flex justify-center items-center mx-auto content-div"
          >

            <div className="opacity-0 group-hover:opacity-100 w-[20rem]">
              <span className="text-2xl font-bold text-center text-white tracking-wider">
                React JS Web Application
              </span>
              <div className="pt-8 text-center">
              <a href="">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
