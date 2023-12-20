// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Activity } from "@components/ActivitiesList/ActivitiesList";
import theme from "@components/HomePage/theme";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import EventStatus from "./EventStatus";

const activityEndpoint = `${import.meta.env.VITE_BACKEND_URL}activities`;
const eventEndpoint = `${import.meta.env.VITE_BACKEND_URL}events`;

const AddEventToGroupForm: React.FC = () => {
  const [eventName, setEventName] = useState<string>("");
  const [eventDateTime, setEventDateTime] = useState<string>(
    new Date().toISOString()
  );
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventActivities, setEventActivities] = useState<Activity[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);
  const [formSubmitted, setFormSubmitted] = useState<{
    isSuccess: boolean;
    message: string;
  } | null>(null);

  const location = useLocation();
  const groupID = location.state?.groupID;
  console.log(groupID);

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateTime = e.currentTarget.value;
    const isoDateTime = new Date(selectedDateTime).toISOString();
    setEventDateTime(isoDateTime);
  };

  const handleCreateEvent = async () => {
    try {
      const response = await axios.post(
        eventEndpoint,
        {
          name: eventName,
          // TODO make group id dynamic
          groupID: "657d0f422cb49ec9046b3b8c",
          eventDateTime: eventDateTime,
          description: eventDescription,
          activities: selectedActivities,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Event created:", response.data.msg);
      setFormSubmitted({ isSuccess: true, message: "Event added!" });
    } catch (error) {
      console.error("Error creating event:", error);
      const generic =
        "An error occurred while creating the event. Please try again.";
      const err = axios.isAxiosError(error) ? (error as AxiosError) : undefined;
      setFormSubmitted({
        isSuccess: false,
        message: err ? `${err.message}` : generic,
      });
    }
  };

  const handleAddMoreEvents = () => {
    setEventName("");
    setEventDescription("");
    setEventDateTime(new Date().toISOString());
    setSelectedActivities([]);
    setFormSubmitted(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { activities },
        } = await axios.get(activityEndpoint);
        setEventActivities(activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
        if (axios.isAxiosError(error)) {
          return {
            data: "API request failed! Did you remember to `npm run dev` the backend app?",
          };
        }
        return {
          data: "A fetching data error occurred.",
        };
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          {formSubmitted === null ? (
            <div>
              <Typography
                gutterBottom
                variant="h3"
                component="h3"
                fontFamily="Pacifico"
              >
                Create Event
              </Typography>
              <div>
                <TextField
                  fullWidth
                  id="event-name"
                  type="text"
                  label="Event Name"
                  margin="normal"
                  defaultValue={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="event-date"
                  type="datetime-local"
                  label="Event Date and Time"
                  margin="normal"
                  defaultValue={eventDateTime.substring(0, 16)}
                  onChange={handleDateTimeChange}
                />
              </div>
              <div>
                <TextField
                  multiline
                  fullWidth
                  id="event-description"
                  type="text"
                  label="Event description"
                  margin="normal"
                  defaultValue={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                />
              </div>
              <div style={{ marginTop: "12px" }}>
                <FormLabel component="legend">Event Activities</FormLabel>
                <FormGroup>
                  {eventActivities.map((activity, index) => (
                    <FormControlLabel
                      key={`activity-${index}`}
                      control={
                        <Checkbox
                          checked={selectedActivities.some(
                            (selected) =>
                              selected.activity === activity.activity &&
                              selected.type === activity.type
                          )}
                          name={activity.activity}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedActivities((prev) => [
                                ...prev,
                                {
                                  activity: activity.activity,
                                  type: activity.type,
                                },
                              ]);
                            } else {
                              setSelectedActivities((prev) =>
                                prev.filter(
                                  (selected) =>
                                    !(
                                      selected.activity === activity.activity &&
                                      selected.type === activity.type
                                    )
                                )
                              );
                            }
                          }}
                        />
                      }
                      label={activity.activity}
                    />
                  ))}
                </FormGroup>
              </div>
              <Button
                variant="contained"
                sx={{ mt: 4 }}
                onClick={handleCreateEvent}
              >
                Create Event
              </Button>
            </div>
          ) : (
            <EventStatus
              isSuccess={formSubmitted.isSuccess}
              message={formSubmitted.message}
              onAddMoreEvents={handleAddMoreEvents}
            />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddEventToGroupForm;
