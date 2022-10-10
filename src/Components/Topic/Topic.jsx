import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="p-4 border border-gray-50 rounded-sm border-opacity-10">
      <img className="max-w-full" src={logo} alt="" />
      <p className="text-cyan-500 font-semibold text-xl my-3">{name}</p>
      <p className="text-slate-200 mb-5">Total Question: {total}</p>
      <Link
        className="bg-cyan-500 font-bold text-slate-800 px-4 py-2 rounded"
        to={`quiz/${id}`}
      >
        Take Quiz
      </Link>
    </div>
  );
};

export default Topic;
