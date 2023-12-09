// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";

const AuthenticatedContent = ({ name, email }) => {
  console.log("Received props:", { name, email });
  return (
    <div>
      <h2>Welcome to Your Dashboard, {name} </h2>
      <p>Email: {email}</p>
      <p>You currently do not belong to any group.</p>
      <button onClick={() => (window.location.href = "/create-group")}>
        Create Group
      </button>
    </div>
  );
};

export default AuthenticatedContent;
