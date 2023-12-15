// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from "react";

const CreateGroupForm = ({ onCreateGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      // Fetch users from the API and update the state
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}users`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
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

  const handleCheckboxChange = (userId) => {
    // Update the selected users when a checkbox is changed
    const updatedUsers = selectedUsers.includes(userId)
      ? selectedUsers.filter((id) => id !== userId)
      : [...selectedUsers, userId];

    setSelectedUsers(updatedUsers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to create a new group with the form data
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}groups`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            groupName,
            description,
            memberEmails: [],
          }),
        }
      );

      if (response.ok) {
        const { newGroupId } = await response.json();
        // Call the parent component's callback with the new group ID
        onCreateGroup(newGroupId);
        console.log("Group created successfully:", newGroupId);
      } else {
        console.error("Group creation failed.");
      }
    } catch (error) {
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
      <div>
        <h4>Select Group Owners:</h4>
        {loadingUsers ? (
          <p>Loading users...</p>
        ) : (
          <div>
            {users.map((user) => (
              <div key={user._id}>
                <input
                  type="checkbox"
                  id={user._id}
                  value={user._id}
                  checked={selectedUsers.includes(user._id)}
                  onChange={() => handleCheckboxChange(user._id)}
                />
                <label htmlFor={user._id}>{user.name}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div />
      <button type="submit">Create Group</button>
    </form>
  );
};

export default CreateGroupForm;
