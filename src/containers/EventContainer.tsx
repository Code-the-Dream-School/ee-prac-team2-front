// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventView from "@components/EventView/EventView";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventContainer() {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}events/${id}`,
          {
            headers: {
              "Cache-Control": "no-cache",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        const fetchedEvent = response.data;
        setEventData(fetchedEvent);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
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

    fetchEvent();
  }, [id]);

  return (
    <EventView
      eventData={eventData}
      isLoading={isLoading}
      setEventData={setEventData}
    />
  );
}

export default EventContainer;
