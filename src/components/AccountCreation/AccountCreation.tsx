// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// AccountCreation.tsx
import theme from "@components/HomePage/theme";
import {
  Box,
  Button,
  Container,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

const AccountCreation = ({
  onCreateAccount,
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  onIsSignup,
}) => {
  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && password.trim()) {
      onCreateAccount(name, email, password);
    } else {
      alert("Please enter a valid name, email, and password.");
    }
  };

  const handleSwitch = () => {
    onIsSignup(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <form onSubmit={handleCreateAccount}>
            <Typography
              gutterBottom
              component="h3"
              variant="h3"
              fontFamily="Pacifico"
            >
              Create Account
            </Typography>
            <div>
              <TextField
                required
                fullWidth
                id="name-field"
                type="text"
                label="Name"
                margin="normal"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="email-field"
                label="Email"
                type="email"
                margin="normal"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="password-field"
                label="Password"
                inputProps={{
                  minLength: 8,
                }}
                type="password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" variant="contained" sx={{ mt: 4 }}>
              Sign Up
            </Button>
            <div>
              <Button sx={{ mt: 4 }} onClick={handleSwitch}>
                Already have an account? Log in here.
              </Button>
            </div>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AccountCreation;
