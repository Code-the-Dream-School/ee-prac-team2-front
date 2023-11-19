import React, { useState } from "react";

// Define the type for the prop
interface AccountCreationProps {
  onAccountCreate: (username: string, email: string, password: string) => void;
}

const AccountCreation: React.FC<AccountCreationProps> = ({
  onAccountCreate,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = async () => {
    // Basic validation: Check if both username, email and password are not empty after trimming whitespace
    if (username.trim() && email.trim() && password.trim()) {
      // If username, email and password are not empty, proceed with creating the account

      // Call the parent component's callback with the entered username and password
      onAccountCreate(username, email, password);

      try {
        // Communicate with the backend team to determine the format of the request
        const response = await fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        });

        if (response.ok) {
          // Account creation successful, handle accordingly (e.g., show a success message)
          console.log("Account created successfully");
        } else {
          // Handle account creation failure (e.g., show an error message)
          console.error("Account creation failed.");
        }
      } catch (error) {
        console.error("Error during account creation:", error);
      }
    } else {
      // If either username, email or password is empty, show an alert
      // Handle validation error by showing a simple pop-up alert message
      alert("Please enter a valid username, email and password.");
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default AccountCreation;
