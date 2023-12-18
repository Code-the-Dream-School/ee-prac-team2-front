// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import { Link } from "react-router-dom";

const GroupCreationResult = ({ isSuccess, newGroupId }) => {
  return (
    <div>
      {isSuccess ? (
        <div>
          <h2>Group Created Successfully!</h2>
          <p>Redirecting to the new group page...</p>
          {/* add a link to the new group page */}
          <Link to={`/groups/${newGroupId}`}>Go to the New Group</Link>
        </div>
      ) : (
        <div>
          <h4>Group Creation Failed</h4>
          <p>There was an error creating the group. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default GroupCreationResult;
