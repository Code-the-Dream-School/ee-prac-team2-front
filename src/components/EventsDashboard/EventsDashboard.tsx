import { useState } from "react";
import { Link } from "react-router-dom";

const EventsDashboard = ({ usersEvents }) => {
  console.log(usersEvents);
  return (
    <div>
      <ul>
        {usersEvents.map((event) => {
          return (
            <li key={event._id}>
              <Link to={"/events/:id"}>{event.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventsDashboard;
