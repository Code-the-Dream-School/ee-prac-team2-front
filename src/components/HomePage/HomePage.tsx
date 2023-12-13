import { Container } from "@mui/material";

import Footer from "./Footer";
import HomePicture from "./HomePicture";
import NavBar from "./NavBar";
import SubPictures from "./SubPictures";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Container>
        <HomePicture />
        <SubPictures />
      </Container>
      <Footer />
    </>
  );
}
