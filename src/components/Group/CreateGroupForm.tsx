// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import theme from "@components/HomePage/theme";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
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
        <Box display="flex" justifyContent="center" minHeight="100vh" mt={8}>
          <form onSubmit={handleSubmit}>
            <Typography
              variant="h2"
              component="h2"
              fontFamily="Just Another Hand"
            >
              Create a New Group
            </Typography>
            <div>
              <TextField
                required
                fullWidth
                label="Group Name"
                margin="normal"
                defaultValue={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>

            <div>
              <TextField
                required
                fullWidth
                multiline
                label="Description"
                margin="normal"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <Typography gutterBottom variant="inherit">
                Select Group Members
              </Typography>
              {loadingUsers ? (
                <Box sx={{ display: "flex", height: "100vh" }}>
                  <CircularProgress color="secondary" />
                </Box>
              ) : (
                <Select
                  isMulti
                  options={userOptions}
                  onChange={handleSelectChange}
                />
              )}
            </div>

            <Button variant="contained" type="submit" sx={{ mt: 4 }}>
              Create Group
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateGroupForm;
