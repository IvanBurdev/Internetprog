import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form>
        <div>
          <label>Име:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Имейл:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Парола:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleClear}>
          Изчисти
        </button>
      </form>

      <div>
        <p>Въведено име: {name}</p>
        <p>Въведен имейл: {email}</p>
        <p>Въведена парола: {password}</p>
      </div>
    </>
  );
};

export default RegistrationForm;
