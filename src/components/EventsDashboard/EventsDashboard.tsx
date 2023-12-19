// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from "react";
import { Link } from "react-router-dom";

const EventsDashboard = ({ usersEvents, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {usersEvents.map((event) => {
            return (
              <li key={event._id}>
                <Link to={`/events/${event._id}`}>{event.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default EventsDashboard;
