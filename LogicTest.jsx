import React, { useState } from "react";

const questions = [
  {
    text: "Кое число липсва в редицата: 2, 4, 8, 16, ?",
    options: ["18", "24", "32"],
  },
  {
    text: "Коя фигура има точно 4 равни страни?",
    options: ["Квадрат", "Триъгълник", "Петоъгълник"],
  },
  {
    text: "Ако днес е понеделник, какъв ден ще бъде след 3 дни?",
    options: ["Сряда", "Четвъртък", "Петък"],
  },
];

const LogicTest = () => {
  const [screen, setScreen] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const startTest = () => {
    setCurrentQuestion(0);
    setScreen("question");
  };

  const handleAnswer = () => {
    const isLastQuestion = currentQuestion === questions.length - 1;

    if (isLastQuestion) {
      setScreen("end");
      return;
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setScreen("start");
  };

  if (screen === "start") {
    return (
      <div>
        <h2>Логически тест</h2>
        <button type="button" onClick={startTest}>
          Започни теста
        </button>
      </div>
    );
  }

  if (screen === "question") {
    const question = questions[currentQuestion];

    return (
      <div>
        <h3>
          Въпрос {currentQuestion + 1} от {questions.length}
        </h3>
        <p>{question.text}</p>

        <div>
          {question.options.map((option) => (
            <button key={option} type="button" onClick={handleAnswer}>
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Тестът е завършен!</h2>
      <button type="button" onClick={restartTest}>
        Започни отначало
      </button>
    </div>
  );
};

export default LogicTest;
