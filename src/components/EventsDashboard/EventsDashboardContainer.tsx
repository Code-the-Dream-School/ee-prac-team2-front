// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";
import { useEffect, useState } from "react";

import EventsDashboard from "./EventsDashboard";

const EventsDashboardContainer = ({ setEventsCount, userID }) => {
  const [usersEvents, setUsersEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsersEvents = async () => {
      try {
        // need to eventually change this approach to only fetch events with userID
        // either as a new endpoint or query params?
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}events`,
          {
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
            },
            withCredentials: true,
          }
        );
        const fetchedEvents = response.data;
        const filteredEvents = fetchedEvents.events.filter(
          (event) =>
            event.host === userID || event.participants.includes(userID)
        );

        setUsersEvents(filteredEvents);
        setEventsCount(filteredEvents.length);
        setIsLoading(false);
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

    fetchUsersEvents();
  }, []);

  return <EventsDashboard usersEvents={usersEvents} isLoading={isLoading} />;
};

export default EventsDashboardContainer;
