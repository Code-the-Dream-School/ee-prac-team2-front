import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import hikePic from "./media/hike_polaroid.png";
import paintPic from "./media/paint_polaroid.png";
import winePic from "./media/wine_polaroid.png";

const itemData = [hikePic, paintPic, winePic];

export default function SubPictures() {
  return (
    <Box>
      <Divider sx={{ mb: 5 }} />
      <Typography gutterBottom variant="h6" align="justify" component="p">
        With the help of BoredAPI and user-generated list of activities, this
        app will help you figure out what to do for your date night, you friend
        hangout, family outing, and so on. Like these examples below. And you
        can organize events with your circle of people and plan together.
      </Typography>
      <ImageList cols={3} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item}>
            <img
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ mt: 5, mb: 5 }} />
    </Box>
  );
}
