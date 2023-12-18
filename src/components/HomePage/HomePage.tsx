import { Container } from "@mui/material";

import HomePicture from "./HomePicture";
import SubPage from "./SubPage";
import SubPictures from "./SubPictures";

export default function HomePage() {
  return (
    <>
      <Container>
        <HomePicture />
        <SubPictures />
        <SubPage />
      </Container>
    </>
  );
}
