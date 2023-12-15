// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import { Link } from "react-router-dom";

const AuthenticatedContent = ({ name, email }) => {
  return (
    <div>
      <h2>Welcome to Your Dashboard, {name} </h2>
      <p>Email: {email}</p>
      <p>You currently do not belong to any group.</p>
      {/* <button onClick={() => (window.location.href = "/create-group")}>
        Create Group
      </button> */}
      <Link to={"/create-group"}>Create Group</Link>
    </div>
  );
};

export default AuthenticatedContent;
