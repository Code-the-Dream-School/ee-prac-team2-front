// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// import EventVotingWindow from "@components/EventVotingWindow/EventVotingWindow";
// import VotableActivitiesList from "@components/VotableActivitiesList/VotableActivitiesList";
import theme from "@components/HomePage/theme";
import { LocalActivityTwoTone } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const EventView = ({ eventData, setEventData, isLoading }) => {
  const calculateTimeLeft = (deadline) => {
    // Added 10 extra seconds to the deadline, this is done so that the backend
    // properly updates the data just as a cautionary measure

    const difference = new Date(deadline) - new Date();
    const total = difference;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(eventData.eventDateTime)
  );

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const timeLeft = calculateTimeLeft(eventData.eventDateTime);
      setTimeLeft(timeLeft);

      if (timeLeft.total <= 0) {
        clearInterval(timerInterval);
        fetchUpdatedEventData();
      }
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [eventData.eventDateTime]);

  const handleVote = async (activityId) => {
    if (timeLeft.total > 0) {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}activities/${activityId}/votes`,
          {},
          {
            headers: {
              "Cache-Control": "no-cache",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        setEventData((prevEventState) => {
          const updatedActivities = prevEventState.activities.map((activity) =>
            activity._id === response.data.activity._id
              ? response.data.activity
              : activity
          );
          return {
            ...prevEventState,
            activities: updatedActivities,
          };
        });
      } catch (error) {
        console.error("Error voting:", error);
      }
    } else {
      console.log("Voting deadline has passed. Voting is disabled.");
    }
  };

  const fetchUpdatedEventData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}events/${eventData._id}`,
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const updatedEventData = response.data;

      setEventData(updatedEventData);
    } catch (error) {
      console.error("Error fetching updated event data:", error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: "flex", height: "100vh" }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <ThemeProvider theme={theme}>
          <Container>
            <Box
              display="flex"
              justifyContent="center"
              minHeight="100vh"
              mt={8}
            >
              <div>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="h3"
                  fontFamily="Pacifico"
                >
                  {eventData.name}
                </Typography>
                <Divider sx={{ mt: 4, mb: 4 }} />
                <Typography gutterBottom variant="h4" component="p">
                  Host: {eventData.host.name}
                </Typography>
                <Typography gutterBottom variant="body1" component="p">
                  Date and Time:{" "}
                  {new Date(eventData.eventDateTime).toLocaleString()}
                </Typography>
                {timeLeft.total > 0 ? (
                  <Typography gutterBottom variant="body1" component="p">
                    Time left until voting ends: {timeLeft.days} days,{" "}
                    {timeLeft.hours} hours, {timeLeft.minutes} minutes,{" "}
                    {timeLeft.seconds} seconds
                  </Typography>
                ) : (
                  <Typography gutterBottom variant="body1" component="p">
                    Voting has ended.
                  </Typography>
                )}
                <Typography gutterBottom variant="body1" component="p">
                  Description: {eventData.description}
                </Typography>
                <Typography gutterBottom variant="body1" component="p">
                  Participants:{" "}
                  {eventData.participants
                    .map((participant) => participant.name)
                    .join(", ")}
                </Typography>
                {eventData.chosenActivity && (
                  <>
                    <h4>Chosen Activity</h4>
                    <p>{eventData.chosenActivity.activity}</p>
                  </>
                )}
                <Typography
                  variant="h3"
                  component="h3"
                  fontFamily="Just Another Hand"
                >
                  Activities
                </Typography>
                <List>
                  {eventData.activities.map((activity) => (
                    <ListItem key={activity._id}>
                      <ListItemAvatar>
                        <Avatar>
                          <LocalActivityTwoTone />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={activity.activity}
                        secondary={activity.votes.length}
                      />
                      <Button
                        variant="contained"
                        disabled={timeLeft.total <= 0}
                        onClick={() => handleVote(activity._id)}
                      >
                        Vote
                      </Button>
                    </ListItem>
                  ))}
                </List>

                {/* <EventVotingWindow />
          <VotableActivitiesList /> */}
              </div>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
};

export default EventView;
