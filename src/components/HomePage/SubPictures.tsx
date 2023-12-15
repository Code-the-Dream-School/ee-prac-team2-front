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
        Can’t decide what to do for your next hangout? Spend less time planning
        and more time hanging with Groupl, an easy-to-use event organizer that
        helps take the guesswork out of your future hangouts. Your group can
        come up with activities or we can suggest some ideas for you - check out
        the ones we have below!
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
