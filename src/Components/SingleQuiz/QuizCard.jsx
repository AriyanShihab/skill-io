import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizCard = ({ quiz }) => {
  const [visibility, setVisibility] = useState(false);
  const checkCorrectAnswer = (e) => {
    if (e.target.innerText === quiz.correctAnswer) {
      toast.success("Correct Answer", { autoClose: 700, theme: "dark" });
      e.target.style.backgroundColor = "#22c55e";
    } else {
      toast.warning("Wrong Answer", { autoClose: 700, theme: "dark" });
      e.target.style.backgroundColor = "#f87171";
    }
  };

  const displayCorrectAnswer = () => {
    setVisibility(!visibility);
  };
  const { question } = quiz;
  const tagRemoved = question.substring(3).slice(0, -4);
  return (
    <div className="m-2 border border-slate-200 border-opacity-20 rounded bg-gray-900 px-3 py-2 ">
      <div className="flex justify-between">
        <h1 className="text-cyan-200 text-xl mb-2">{tagRemoved}</h1>
        <div className="flex justify-end gap-2">
          {visibility ? (
            <p className="text-gray-200">
              {" "}
              Correct Answer : {quiz.correctAnswer}
            </p>
          ) : (
            ""
          )}
          <FontAwesomeIcon
            onClick={displayCorrectAnswer}
            className="text-xl text-cyan-500"
            icon={visibility ? faEyeSlash : faEye}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {quiz.options.map((opt) => (
          <button
            onClick={(e) => checkCorrectAnswer(e)}
            className="p-2 bg-gray-800 text-slate-200 rounded"
            key={opt}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
