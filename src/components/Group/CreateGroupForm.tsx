// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const CreateGroupForm = ({ onCreateGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}users`
        );

        if (response.ok) {
          const { users } = await response.json();
          setUsers(users);
        } else {
          console.error("Failed to fetch users:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching registered users:", error);
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  const userOptions = users.map((user) => ({
    value: user.email,
    label: user.email,
  }));

  const handleSelectChange = (selectedOptions) => {
    const selectedUserEmails = selectedOptions.map((option) => option.value);
    setSelectedUsers(selectedUserEmails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //API call
    const groupData = {
      groupName,
      description,
      memberEmails: selectedUsers,
    };

    try {
      console.log("Sending group creation request with data:", groupData);
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
        console.log("Group created successfully:", response);
        onCreateGroup(response); // Call the parent component's callback
      } else {
        console.error("Group creation failed.");
        // Handle errors or provide user feedback
      }
    } catch (error) {
      console.log(error);
      console.error("Error during group creation:", error);
    }
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
      <div>
        <h4>Select Group Members:</h4>
        {loadingUsers ? (
          <p>Loading users...</p>
        ) : (
          <Select isMulti options={userOptions} onChange={handleSelectChange} />
        )}
      </div>
      <div />
      <button type="submit">Create Group</button>
    </form>
  );
};

export default CreateGroupForm;
