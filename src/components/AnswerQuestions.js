import React from "react";

function AnswerQuestions(props) {
  return <button onClick={props.removeQuestion} id="answerButton">Answer</button>;
}

export default AnswerQuestions;
