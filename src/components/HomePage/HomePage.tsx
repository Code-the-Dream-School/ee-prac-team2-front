import { Container } from "@mui/material";

import HomePicture from "./HomePicture";
import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Container>
        <HomePicture />
      </Container>
    </>
  );
}
