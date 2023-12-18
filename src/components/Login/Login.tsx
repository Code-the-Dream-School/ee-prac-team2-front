import AccountCreationContainer from "@components/AccountCreation/AccountCreationContainer";
import theme from "@components/HomePage/theme";
import {
  Box,
  Button,
  Container,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Login = ({ loginUser, onIsSignup }) => {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(currentUser);
    loginUser(currentUser);
    setTimeout(() => {
      setCurrentUser({
        email: "",
        password: "",
      }),
        2000;
    });
  };

  const handleSwitch = () => {
    onIsSignup(true);
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
          <form onSubmit={handleLoginSubmit}>
            <Typography
              gutterBottom
              component="h3"
              variant="h3"
              fontFamily="Pacifico"
            >
              Welcome Back!
            </Typography>
            <div>
              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                id="email"
                name="email"
                margin="normal"
                defaultValue={currentUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <TextField
                required
                fullWidth
                type="password"
                id="password"
                name="password"
                label="Password"
                value={currentUser.password}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit" variant="contained" sx={{ mt: 4 }}>
              Log In
            </Button>
            <div>
              <Button sx={{ mt: 4 }} onClick={handleSwitch}>
                Don't have an account? Sign up here.
              </Button>
            </div>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
  l;
};

export default Login;
