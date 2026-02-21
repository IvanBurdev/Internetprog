import React, { useEffect, useRef, useState } from "react";

function TimerApp() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // за UX (disable бутони)
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // вече работи

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    setIsRunning(true);
  };

  const pauseTimer = () => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const resetTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(0);
    setIsRunning(false);
  };

  // чистене при unmount (добра практика)
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Таймер: {time} сек</h1>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={startTimer} disabled={isRunning}>
          Старт
        </button>

        <button onClick={pauseTimer} disabled={!isRunning}>
          Пауза
        </button>

        <button onClick={resetTimer} disabled={!isRunning && time === 0}>
          Нулиране
        </button>
      </div>

      <p style={{ marginTop: "16px", opacity: 0.7 }}>
        Състояние: {isRunning ? "Работи" : "Спрян"}
      </p>
    </div>
  );
}

export default TimerApp;
