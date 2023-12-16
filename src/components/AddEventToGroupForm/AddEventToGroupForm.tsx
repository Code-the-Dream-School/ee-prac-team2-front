import axios from "axios";
import React, { useEffect, useState } from "react";

const activityEndpoint = `${import.meta.env.VITE_BACKEND_URL}activities`;
const eventEndpoint = `${import.meta.env.VITE_BACKEND_URL}events`;

const AddEventToGroupForm: React.FC = () => {
  const [eventName, setEventName] = useState<string>("");
  const [eventDateTime, setEventDateTime] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventActivities, setEventActivities] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const handleDateTimeChange = (e) => {
    setEventDateTime(e.target.value);
    const isoDateTime = `${e.target.value}:00.000Z`;
    console.log(isoDateTime);
  };
  const handleCreateEvent = async () => {
    try {
      const response = await fetch(eventEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: eventName,
          groupID: "6577404f7559e6f996cdf3cd",
          eventDateTime: eventDateTime,
          activities: selectedActivities,
        }),
      });

      const createdEvent = response.data;

      console.log("Event created:", createdEvent);
    } catch (error) {
      console.error("Error creating event:", error);
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
        value={eventDateTime}
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
            checked={selectedActivities.includes(activity.activity)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedActivities((prev) => [...prev, activity.activity]);
              } else {
                setSelectedActivities((prev) =>
                  prev.filter((selected) => selected !== activity.activity)
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
