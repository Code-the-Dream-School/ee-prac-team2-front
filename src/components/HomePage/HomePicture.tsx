import { Box, Typography } from "@mui/material";

import outdoorPic from "./media/outdoor.png";

export default function HomePicture() {
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        fontFamily="Just Another Hand"
        align="center"
        sx={{ mt: 8, mb: 4 }}
      >
        Plan together. Get together.
      </Typography>
      <img src={outdoorPic} alt="splash" style={{ width: "100%" }} />
      <Typography
        variant="h2"
        component="h2"
        fontFamily="Just Another Hand"
        align="center"
        sx={{ mt: 4, mb: 4 }}
      >
        With the help of suggested ideas.
      </Typography>
    </Box>
  );
}
