import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../SingleQuiz/QuizCard";

const Quiz = () => {
  const quizs = useLoaderData().data;
  const { questions } = quizs;

  return (
    <div className="bg-slate-900 pt-[100px] min-h-screen pb-[140px]">
      {/* <div className="rounded p-4 py-8 m-3 bg-gray-900 border border-gray-200 border-opacity-20">
        <h4 className="text-slate-200">
          When love and skill work together, expect a masterpiece.
          <span className="text-cyan-500"> John Ruskin</span>
        </h4>
      </div> */}
      <div className=" md:w-3/4 mx-auto px-3">
        {/* quates area */}

        <div className="rounded p-4 py-8 m-3 bg-gray-900 border border-gray-200 border-opacity-20">
          <div className="flex flex-col md:flex-row justify-start items-center gap-y-5 gap-x-4 ">
            <img className="w-[200px]" src={quizs.logo} alt="" />

            <div>
              <h2 className="font-bold text-xl md:text-3xl text-slate-200">
                Let's Start The Quiz Of{" "}
                <span className="text-cyan-500">{quizs.name}</span>
              </h2>
              <h4 className="text-slate-200 ">
                Number Of Questions{" "}
                <span className="text-cyan-500">{quizs.total}</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-20">
          {questions.map((question) => (
            <QuizCard key={question.id} quiz={question}></QuizCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
