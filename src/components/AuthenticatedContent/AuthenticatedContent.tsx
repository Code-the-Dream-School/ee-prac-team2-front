// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsDashboardContainer from "@components/EventsDashboard/EventsDashboardContainer";
import GroupsDashboardContainer from "@components/GroupsDashboard/GroupsDashboardContainer";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AuthenticatedContent = () => {
  const [groupCount, setGroupCount] = useState(null);
  const [eventsCount, setEventsCount] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const user = state?.user;

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, []);

  if (!user) {
    return <h1>User not found. Please sign in.</h1>;
  }

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
            userID={user.userID}
          />
        )}
      </div>
      <Link to={"/create-group"}>Create Group</Link>
    </div>
  );
};

export default AuthenticatedContent;
