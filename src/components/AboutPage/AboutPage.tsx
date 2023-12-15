import angel from "@components/AboutPage/media/angel.png";
import annie from "@components/AboutPage/media/annie.png";
import darga from "@components/AboutPage/media/darga.png";
import jillian from "@components/AboutPage/media/jillian.png";
import marice from "@components/AboutPage/media/marice.png";
import mohammad from "@components/AboutPage/media/mohammad.png";
import victoria from "@components/AboutPage/media/victoria.png";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

function card(
  img: string,
  name: string,
  role: string,
  color: string,
  degree: string
) {
  return (
    <Card raised sx={{ m: 1, p: 1, maxWidth: 200, backgroundColor: color }}>
      <CardMedia
        component="img"
        image={img}
        sx={{ rotate: degree, zIndex: -1 }}
      />
      <CardHeader
        title={name}
        subheader={role}
        titleTypographyProps={{ fontFamily: "Pacifico" }}
      />
      <CardContent></CardContent>
    </Card>
  );
}

const bgc = {
  dg: "#026873",
  lg: "#027373",
  nt: "#BFB3A4",
  lp: "#F2B199",
  dp: "#F29B88",
};

export default function AboutPage() {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h2"
        fontFamily="Pacifico"
        align="center"
        mt={8}
        mb={4}
      >
        Meet the Team
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        fontFamily="Just Another Hand"
        align="center"
        mt={5}
      >
        Backend Node.js
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        {card(mohammad, "Mohammad", "Student", bgc.lg, "-2deg")}
        {card(marice, "Marice", "Student", bgc.lp, "1deg")}
      </Box>
      <Typography
        variant="h3"
        component="h3"
        fontFamily="Just Another Hand"
        align="center"
        mt={5}
      >
        FrontEnd React.js
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        {card(jillian, "Jillian", "Student", bgc.lp, "-1deg")}
        {card(victoria, "Victoria", "Student", bgc.nt, "-3deg")}
        {card(annie, "Annie", "Student", bgc.lg, "2deg")}
      </Box>
      <Typography
        variant="h3"
        component="h3"
        fontFamily="Just Another Hand"
        align="center"
        mt={5}
      >
        Awesome Mentors
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        {card(angel, "Angel", "Mentor", bgc.lg, "2deg")}
        {card(darga, "Darga", "Mentor", bgc.lp, "-1deg")}
      </Box>
    </Container>
  );
}
