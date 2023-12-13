// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// AccountCreation.tsx

import {
  Box,
  Button,
  Container,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import theme from "./../HomePage/theme";

const AccountCreation = ({
  onCreateAccount,
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
}) => {
  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && password.trim()) {
      onCreateAccount(name, email, password);
    } else {
      alert("Please enter a valid name, email, and password.");
    }
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box
          component="form"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          onSubmit={handleCreateAccount}
        >
          <div>
            <Typography component="h3" variant="h3" fontFamily="Pacifico">
              Create Account
            </Typography>
            <div>
              <TextField
                required
                id="name-field"
                label="Name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                required
                id="email-field"
                label="Email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                required
                id="password-field"
                label="Password"
                minLength={8}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button variant="contained" type="submit" align="right">
              Sign Up
            </Button>
          </div>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default AccountCreation;
