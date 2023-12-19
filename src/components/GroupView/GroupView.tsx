// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsList from "@components/EventsList/EventsList";
import MembersList from "@components/MembersList/MembersList";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function GroupView({ isLoading, group, isOwner, isMember }) {
  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: "flex", height: "100vh" }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Container>
          <Box>
            <Typography
              variant="h2"
              component="h2"
              fontFamily="Just Another Hand"
            >
              {group.groupName}
            </Typography>
            <Typography variant="h5" component="p">
              {group.description}
            </Typography>

            <MembersList />
            {isMember && <button>Leave group</button>}
            {!isMember && !isOwner && <button>Join group</button>}
            <EventsList />
            <Link to="/events/" state={{ groupID: group._id }}>
              Create an event for this group
            </Link>
            {isOwner && <button>Delete group</button>}
          </Box>
        </Container>
      )}
    </div>
  );
}
