import {
  EditCalendarTwoTone,
  EventTwoTone,
  GroupAddTwoTone,
  RollerSkatingTwoTone,
  RuleTwoTone,
} from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function SubPage() {
  return (
    <Box sx={{ flexGrow: 1, mb: 8 }}>
      <Stack
        direction="row"
        spacing={4}
        divider={<Divider flexItem orientation="vertical" />}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h1" align="center">
            <GroupAddTwoTone fontSize="large" />
          </Typography>
          <Typography variant="h5" align="center">
            Form a group
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1" align="center">
            <EditCalendarTwoTone fontSize="large" />
          </Typography>
          <Typography variant="h5" align="center">
            Create an event
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1" align="center">
            <RuleTwoTone fontSize="large" />
          </Typography>
          <Typography variant="h5" align="center">
            Vote on an activity
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1" align="center">
            <EventTwoTone fontSize="large" />
          </Typography>
          <Typography variant="h5" align="center">
            Mark your calendar
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1" align="center">
            <RollerSkatingTwoTone fontSize="large" />
          </Typography>
          <Typography variant="h5" align="center">
            And go socialize with your groupals!
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ m: 4 }} />
      <Typography
        variant="h2"
        align="center"
        mb={8}
        fontFamily="Just Another Hand"
      >
        Sign up today and make your life easier!
      </Typography>
    </Box>
  );
}
