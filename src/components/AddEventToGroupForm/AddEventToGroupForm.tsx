import { Activity } from "@components/ActivitiesList/ActivitiesList";
import axios from "axios";
import React, { useEffect, useState } from "react";

const activityEndpoint = `${import.meta.env.VITE_BACKEND_URL}activities`;
const eventEndpoint = `${import.meta.env.VITE_BACKEND_URL}events`;

const AddEventToGroupForm: React.FC = () => {
  const [eventName, setEventName] = useState<string>("");
  const [eventDateTime, setEventDateTime] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventActivities, setEventActivities] = useState<Activity[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<
    { activity: string; type: string }[]
  >([]);

  const handleDateTimeChange = (e: React.FormEvent<HTMLInputElement>) => {
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
          groupID: "657f6d3d73f35df49d8ffac2",
          eventDateTime: eventDateTime,
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
    } catch (error) {
      console.error("Error creating event:", error.response.data.msg);
    }
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
    <div>
      <h2>Create Event</h2>
      <label htmlFor="event-name">Event Name:</label>
      <input
        id="event-name"
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <br />
      <label htmlFor="event-date">Event Date and Time:</label>
      <input
        id="event-date"
        type="datetime-local"
        defaultValue={eventDateTime.substring(0, 16)}
        onChange={handleDateTimeChange}
      />
      <br />
      <label htmlFor="event-description">Event Description:</label>
      <input
        id="event-description"
        type="text"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <br />
      <label htmlFor="event-activities">Event Activities:</label>
      {eventActivities.map((activity, index) => (
        <div key={`activity-${index}`}>
          <input
            type="checkbox"
            id={`activity-${index}`}
            value={activity.activity}
            checked={selectedActivities.some(
              (selected) =>
                selected.activity === activity.activity &&
                selected.type === activity.type
            )}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedActivities((prev) => [
                  ...prev,
                  { activity: activity.activity, type: activity.type },
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
          <label htmlFor={`activity-${index}`}>
            {activity.activity} - {activity.type}
          </label>
        </div>
      ))}
      <br />
      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
};

export default AddEventToGroupForm;
