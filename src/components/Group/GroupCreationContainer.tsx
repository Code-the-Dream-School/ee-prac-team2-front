// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// GroupCreationContainer.jsx

import axios from "axios";
import React, { useState } from "react";

import CreateGroupForm from "./CreateGroupForm";
import GroupCreationResult from "./GroupCreationResult";

const GroupCreationContainer = () => {
  const [isCreateButtonClicked, setCreateButtonClicked] = useState(false);
  const [groupCreationResult, setGroupCreationResult] = useState({
    isSuccess: null,
    newGroupId: null,
  });

  const handleGroupCreation = async (groupData) => {
    // Dummy API call (replace with actual API call)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}groups`,
        groupData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response) {
        // Set success result with the new group ID
        setGroupCreationResult({
          isSuccess: true,
          newGroupId: response.id,
        });
      } else {
        // Set error result
        setGroupCreationResult({ isSuccess: false, newGroupId: null });
      }
    } catch (error) {
      // Set error result in case of network or other errors
      setGroupCreationResult({ isSuccess: false, newGroupId: null });
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
          isSuccess={groupCreationResult.isSuccess}
          newGroupId={groupCreationResult.newGroupId}
        />
      )}
    </div>
  );
};

export default GroupCreationContainer;
