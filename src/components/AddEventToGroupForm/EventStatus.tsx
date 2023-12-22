import theme from "@components/HomePage/theme";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

interface EventSuccessMessageProps {
  isSuccess: boolean;
  message: string;
  onAddMoreEvents: () => void;
}

const EventSuccessMessage: React.FC<EventSuccessMessageProps> = ({
  isSuccess,
  message,
  onAddMoreEvents,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          {isSuccess ? (
            <div>
              <Typography gutterBottom variant="h3">
                {message}
              </Typography>

              <Button variant="contained" onClick={onAddMoreEvents}>
                Add More Events
              </Button>

              <Typography gutterBottom variant="h4">
                Current list of activities
              </Typography>
            </div>
          ) : (
            <div>
              <Typography gutterBottom variant="h3">
                Event failed: {message}
              </Typography>
              <Button variant="contained" onClick={onAddMoreEvents}>
                Try Again
              </Button>
            </div>
          )}{" "}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EventSuccessMessage;
