import CopyrightIcon from "@mui/icons-material/Copyright";
import { AppBar, Box, ThemeProvider, Toolbar, Typography } from "@mui/material";

import theme from "./theme";

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h6"
              fontFamily="Pacifico"
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
            >
              <CopyrightIcon /> Groupals - Code the Dream Practicum 2023
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
