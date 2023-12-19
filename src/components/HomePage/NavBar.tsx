import {
  AccountCircleTwoTone,
  LogoutTwoTone,
  SettingsTwoTone,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import logoIcon from "./media/logo.png";
import theme from "./theme";

export default function NavBar({ isLoggedIn }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="warning">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 2 }}
            >
              <Avatar src={logoIcon} />
            </IconButton>
            <Typography
              variant="h6"
              fontFamily="Pacifico"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Groupals
            </Typography>
            <Button color="inherit">
              <Link to="/about">About</Link>
            </Button>

            {isLoggedIn ? (
              <>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<SettingsTwoTone />}
                  sx={{ ml: 4 }}
                >
                  <Link to="/signup">Annie</Link>
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  endIcon={<LogoutTwoTone />}
                  sx={{ ml: 4 }}
                >
                  <Link to="/signup">Logout</Link>
                </Button>
              </>
            ) : (
              <Button
                variant="outlined"
                color="inherit"
                endIcon={<AccountCircleTwoTone />}
                sx={{ ml: 4 }}
              >
                <Link to="/signup">Login</Link>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
