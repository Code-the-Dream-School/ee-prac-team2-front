// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from "react";

const AccountCreation = ({ onCreateAccount }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && password.trim()) {
      onCreateAccount(name, email, password);
    } else {
      alert("Please enter a valid name, email, and password.");
    }
  };

  return (
    <form onSubmit={handleCreateAccount}>
      <div>
        <h2>Create Account</h2>
        <label>
          Name:
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div />

        <label>
          Email:
          <input
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div />

        <label>
          Password:
          <input
            required
            type="password"
            value={password}
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div />

        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default AccountCreation;
