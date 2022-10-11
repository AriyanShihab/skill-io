import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import QuizCard from "../SingleQuiz/QuizCard";

const Quiz = () => {
  const quizs = useLoaderData().data;
  const [errCount, setErrorCount] = useState(0);
  const [writeCount, setWriteCount] = useState(0);
  const checkCorrectAnswer = (e, quiz) => {
    if (e.target.innerText === quiz.correctAnswer) {
      toast.success("Correct Answer", { autoClose: 700, theme: "dark" });
      e.target.style.backgroundColor = "#22c55e";
      setWriteCount(writeCount + 1);
    } else {
      toast.warning("Wrong Answer", { autoClose: 700, theme: "dark" });
      e.target.style.backgroundColor = "#f87171";
      setErrorCount(errCount + 1);
    }
  };
  const { questions } = quizs;

  return (
    <div className="bg-slate-900 pt-[100px] min-h-screen pb-[140px] overflow-auto">
      <div className=" md:w-3/4 mx-auto px-3">
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
        <div className="grid md:grid-cols-4">
          <div className="col-span-3">
            <div className="mt-20">
              {questions.map((question) => (
                <QuizCard
                  key={question.id}
                  quiz={question}
                  checkCorrectAnswer={checkCorrectAnswer}
                ></QuizCard>
              ))}
            </div>
          </div>
          <div className="col-span-1 mt-20">
            <div className="bg-slate-800 p-2 m-1 border border-slate-200 border-opacity-20 rounded">
              <h2 className="text-xl font-bold text-cyan-500"> Quiz Count</h2>

              {writeCount > 0 ? (
                <h2 className="text-xl p-2 m-2 bg-green-400 rounded">
                  Correct: {writeCount}
                </h2>
              ) : (
                ""
              )}
              {errCount > 0 ? (
                <h2 className="text-xl p-2 m-2 bg-red-300 rounded">
                  Error: {errCount}
                </h2>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* quates area */}
      </div>
    </div>
  );
};

export default Quiz;
