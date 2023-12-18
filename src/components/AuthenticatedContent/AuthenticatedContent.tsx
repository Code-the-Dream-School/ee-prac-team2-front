// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsDashboardContainer from "@components/EventsDashboard/EventsDashboardContainer";
import GroupsDashboardContainer from "@components/GroupsDashboard/GroupsDashboardContainer";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AuthenticatedContent = () => {
  const [groupCount, setGroupCount] = useState(null);
  const [eventsCount, setEventsCount] = useState(null);

  const location = useLocation();
  const { state } = location;

  const user = state && state.user;

  return (
    <div>
      <h2>Welcome to Your Dashboard, {user.name} </h2>
      <p>Email: {user.email}</p>
      <div>
        <h3>Your upcoming events:</h3>
        {eventsCount === 0 ? (
          <p>
            You currently do not have any upcoming events. Create a group below
            or click on an existing group to create an event.
          </p>
        ) : (
          <EventsDashboardContainer
            eventsCount={eventsCount}
            setEventsCount={setEventsCount}
            userID={user.userID}
          />
        )}
      </div>

      <div>
        <h3>Your groups:</h3>
        {groupCount === 0 ? (
          <p>You currently do not belong to any groups.</p>
        ) : (
          <GroupsDashboardContainer
            groupCount={groupCount}
            setGroupCount={setGroupCount}
          />
        )}
      </div>

      {/* <button onClick={() => (window.location.href = "/create-group")}>
        Create Group
      </button> */}
      <Link to={"/create-group"}>Create Group</Link>
    </div>
  );
};

export default AuthenticatedContent;
