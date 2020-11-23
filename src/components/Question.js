import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import "./Question.css";
const Question = ({ title, info, id }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <article key={id} className="question-answer-card">
      <div className="question">
        <div>{title}</div>
        <div onClick={() => setIsClicked(!isClicked)} className="icon-box">
          {isClicked ? (
            <AiOutlineMinus className="icon" />
          ) : (
            <AiOutlinePlus className="icon" />
          )}
        </div>
      </div>
      {isClicked && <div>{info}</div>}
    </article>
  );
};

export default Question;
