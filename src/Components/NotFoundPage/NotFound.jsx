import React from "react";
import { Link } from "react-router-dom";
import notFound from "./notFound.jpg";

const NotFound = () => {
  return (
    <div className="bg-slate-900 py-20">
      <div className="bg-slate-800 p-5 rounded border border-slate-200 border-opacity-20 md:w-3/4 mx-auto ">
        <div className="flex justify-start gap-3 items-center">
          <img className="max-w-full" src={notFound} alt="" />
          <div>
            <h2 className="text-4xl font-bold text-cyan-500 mb-10">
              Ops!, Page Not Found
            </h2>
            <Link
              className="m-2 rounded px-3 py-2 bg-cyan-500 font-bold text-gray-900"
              to="/"
            >
              Back To Home
            </Link>
            <Link
              className="m-2 rounded px-3 py-2 bg-cyan-500 font-bold text-gray-900"
              to="/stats"
            >
              Back To Stat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
