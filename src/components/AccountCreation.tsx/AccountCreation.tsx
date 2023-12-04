import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const AccountCreation = ({ onAccountCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleCreateAccount = async (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && password.trim()) {
      onAccountCreate(name, email, password);

      try {
        const response = await fetch(
          "https://dn-live-test.onrender.com/api/v1/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log("Account created successfully:", responseData);
        } else {
          console.error("Account creation failed.");
        }
      } catch (error) {
        console.error("Error during account creation:", error);
      }
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
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default AccountCreation;
