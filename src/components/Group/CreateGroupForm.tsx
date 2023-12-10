// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from "react";

const CreateGroupForm = ({ onCreateGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy data for API call (replace with actual API call)
    const groupData = {
      groupName,
      description,
      category,
    };

    // Call the parent component's callback to handle group creation
    onCreateGroup(groupData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Group</h2>
      <label>
        Group Name:
        <input
          required
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </label>
      <div />
      <label>
        Description:
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <div />
      <label>
        Category:
        <input
          required
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <div />
      <button type="submit">Create Group</button>
    </form>
  );
};

export default CreateGroupForm;
