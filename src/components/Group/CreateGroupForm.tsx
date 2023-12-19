// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import theme from "@components/HomePage/theme";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
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
          `${import.meta.env.VITE_BACKEND_URL}users`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
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
        const newGroupId = response.data.newGroup._id;
        // Call the parent component's callback with the new group ID
        onCreateGroup(newGroupId);
        console.log("Group created successfully:", newGroupId);
      } else {
        console.error("Group creation failed.", response);
      }
    } catch (error) {
      console.error("Error during group creation:", error.response.data.msg);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h2"
            component="h2"
            fontFamily="Just Another Hand"
          >
            Create a New Group
          </Typography>
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
              <Select
                isMulti
                options={userOptions}
                onChange={handleSelectChange}
              />
            )}
          </div>
          <div />
          <button type="submit">Create Group</button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default CreateGroupForm;
