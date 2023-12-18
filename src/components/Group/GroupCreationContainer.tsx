// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// GroupCreationContainer.jsx

import React, { useState } from "react";

import CreateGroupForm from "./CreateGroupForm";
import GroupCreationResult from "./GroupCreationResult";

const GroupCreationContainer = () => {
  const [isCreateButtonClicked, setCreateButtonClicked] = useState(false);
  const [newGroupId, setNewGroupId] = useState(null); // State to hold the newGroupId

  const handleGroupCreation = async (responseData) => {
    // Dummy API call (replace with actual API call)
    try {
      if (responseData.status === 200) {
        // Set the new group ID in the state
        setNewGroupId(responseData.data.newGroup._id);
      }
    } catch (error) {
      // Handle errors if needed
    } finally {
      // Set the create button clicked to true
      setCreateButtonClicked(true);
    }
  };

  return (
    <div>
      {/* Render CreateGroupForm with the callback to handle group creation */}
      <CreateGroupForm onCreateGroup={handleGroupCreation} />

      {/* Conditionally render GroupCreationResult only when the create button is clicked */}
      {isCreateButtonClicked && (
        <GroupCreationResult
          isSuccess={newGroupId !== null}
          newGroupId={newGroupId}
        />
      )}
    </div>
  );
};

export default GroupCreationContainer;
