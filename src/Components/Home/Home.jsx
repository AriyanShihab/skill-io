import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import banner from "./banner.jpg";

const Home = () => {
  const topics = useLoaderData().data;

  return (
    <div>
      {/* banner section */}
      <div className="md:min-h-[45vh] ">
        <header
          style={{ backgroundImage: `url(${banner})` }}
          className="relative md:p-10 p-1  bg-no-repeat bg-cover bg-center  z-20"
        >
          <div className="absolute h-full w-full inset-0 bg-gradient-to-r from-slate-700 to-slate-900 opacity-90 z-[-2]"></div>
          <div className="conatiner lg:w-3/4 mx-auto p-5 flex items-center justify-center min-h-[70vh]">
            <div className="rounde py-20 px-4  rounded md:p-20 md:text-center">
              <span className="md:text-7xl text-4xl font-bold bg-gradient-to-tr from-blue-400 to-cyan-500 text-transparent bg-clip-text mb-5">
                Test Your Skill's with US
              </span>
              <p className=" mt-4 mb-10 text-gray-50  text-xl capitalize">
                Select the topic read questions, and answer them to test Your
                skils. you can read our blog, vsit our stast page as well
              </p>

              <Link
                to={"/blog"}
                className="px-4 py-2 rounded font-bold md:text-3xl text-gray-800 text-[18px] bg-cyan-500 m-2"
              >
                Visit Blog
              </Link>
              <Link
                to={"/stats"}
                className="px-4 py-2 rounded font-bold md:text-3xl text-gray-800 text-[18px] bg-cyan-500"
              >
                Visit Stats
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* topick Selection area */}
      <div className="bg-slate-900 p-4 pt-[100px] ">
        <div className="md:w-3/4 mx-auto px-3 pb-16">
          <h2 className="font-bold text-3xl text-cyan-500 my-3">
            Select Topic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {topics.map((topic) => (
              <Topic key={topic.id} topic={topic}></Topic>
            ))}
          </div>
        </div>
      </div>

      {/* stat area */}
      <div className="bg-slate-900 py-20 ">
        <div className=" md:w-3/4  mx-auto">
          <div className="grid md:grid-cols-3  grid-cols-1 gap-3 px-4 ">
            <div className="grid place-items-center	p-4 py-10 border border-gray-50 rounded-sm border-opacity-10 text-center">
              <h2 className="font-bold text-4xl text-cyan-500 my-2">4</h2>
              <h4 className="text-xl text-slate-200 font-bold">Topics</h4>
            </div>
            <div className="grid place-items-center	 bg-cyan-500 p-4 border border-gray-50 rounded-sm border-opacity-10 text-center">
              <h2 className="font-bold text-4xl text-slate-900 my-2">35+</h2>
              <h4 className="text-xl text-slate-800 font-bold">Quections</h4>
            </div>
            <div className=" grid place-items-center	 p-4 border border-gray-50 rounded-sm border-opacity-10 text-center">
              <h2 className="font-bold text-4xl text-cyan-500 my-2">3</h2>
              <h4 className="text-xl text-slate-200 font-bold">Blogs</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
