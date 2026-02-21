import React, { useMemo, useState } from "react";

export default function LogicTest() {
  // Screens: "start" | "quiz" | "end"
  const [screen, setScreen] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = useMemo(
    () => [
      {
        text: "Кое число логично следва в редицата: 2, 4, 8, 16, ?",
        answers: ["18", "24", "32"],
      },
      {
        text: "Всички котки са животни. Някои животни са черни. Кое е вярно?",
        answers: [
          "Някои котки са черни",
          "Възможно е нито една котка да не е черна",
          "Всички животни са котки",
        ],
      },
      {
        text: "Кое е различното?",
        answers: ["Квадрат", "Триъгълник", "Синьо"],
      },
    ],
    []
  );

  const currentQuestion = questions[currentIndex];

  const startTest = () => {
    setCurrentIndex(0);
    setScreen("quiz");
  };

  const restart = () => {
    setCurrentIndex(0);
    setScreen("start");
  };

  const answer = (_choiceIndex) => {
    const isLast = currentIndex >= questions.length - 1;
    if (isLast) setScreen("end");
    else setCurrentIndex((i) => i + 1);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {screen === "start" && (
          <>
            <h2 style={styles.title}>Тест за логическа задача</h2>
            <p style={styles.text}>
              Натисни бутона, за да започнеш. Въпросите се показват един по един.
            </p>
            <button style={styles.primaryBtn} onClick={startTest}>
              Започни теста
            </button>
          </>
        )}

        {screen === "quiz" && currentQuestion && (
          <>
            <div style={styles.metaRow}>
              <span style={styles.meta}>
                Въпрос {currentIndex + 1} / {questions.length}
              </span>
            </div>

            <h3 style={styles.question}>{currentQuestion.text}</h3>

            <div style={styles.answers}>
              {currentQuestion.answers.map((ans, idx) => (
                <button
                  key={ans}
                  style={styles.answerBtn}
                  onClick={() => answer(idx)}
                >
                  <strong style={{ marginRight: 10 }}>
                    {String.fromCharCode(65 + idx)}
                  </strong>
                  {ans}
                </button>
              ))}
            </div>
          </>
        )}

        {screen === "end" && (
          <>
            <h2 style={styles.title}>Тестът е завършен!</h2>
            <button style={styles.primaryBtn} onClick={restart}>
              Започни отначало
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 16,
    background: "#f6f7fb",
  },
  card: {
    width: "min(720px, 100%)",
    background: "white",
    borderRadius: 16,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  title: { margin: "0 0 10px", fontSize: 26 },
  text: { margin: "0 0 16px", lineHeight: 1.5, color: "#333" },
  metaRow: { display: "flex", justifyContent: "space-between", marginBottom: 10 },
  meta: { fontSize: 14, color: "#666" },
  question: { margin: "6px 0 16px", fontSize: 20 },
  answers: { display: "grid", gap: 10 },
  primaryBtn: {
    border: "none",
    padding: "12px 16px",
    borderRadius: 12,
    cursor: "pointer",
    background: "#111827",
    color: "white",
    fontSize: 16,
    width: "fit-content",
  },
  answerBtn: {
    border: "1px solid #e5e7eb",
    padding: "12px 14px",
    borderRadius: 12,
    cursor: "pointer",
    background: "white",
    textAlign: "left",
    fontSize: 16,
  },
};
