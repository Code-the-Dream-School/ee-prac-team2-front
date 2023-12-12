import axios from "axios";
import React, { useState } from "react";

const AddEventToGroupForm: React.FC = () => {
  const [eventName, setEventName] = useState<string>("");
  const [eventDateTime, setEventDateTime] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [hostName, setHostName] = useState<string>("");

  const handleCreateEvent = async () => {
    try {
      // temporarily disable while coding, TODO: remove once done
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post("http://localhost:3000/api/v1/events", {
        groupID: "",
        host: hostName,
        name: eventName,
        eventDateTime: eventDateTime,
        activities: [],
      });
      history.push("/activities");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

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
      <label htmlFor="event-host">Event Host:</label>
      <input
        id="event-host"
        type="text"
        value={hostName}
        onChange={(e) => setHostName(e.target.value)}
      />
      <br />
      <label htmlFor="event-date">Event Date and Time:</label>
      <input
        id="event-date"
        type="datetime-local"
        value={eventDateTime}
        onChange={(e) => setEventDateTime(e.target.value)}
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
      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
};

export default AddEventToGroupForm;
