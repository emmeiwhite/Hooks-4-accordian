import React, { useState } from "react";
import data from "./../data";
import Question from "./Question";

export default function QuestionList() {
  const [questions, setQuestions] = useState(data);
  return (
    <div>
      {questions.length > 0 &&
        questions.map((question) => {
          return <Question {...question} />;
        })}
    </div>
  );
}
