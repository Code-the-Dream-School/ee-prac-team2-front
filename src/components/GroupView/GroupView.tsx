// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsList from "@components/EventsList/EventsList";
import MembersList from "@components/MembersList/MembersList";
import { Link } from "react-router-dom";

export default function GroupView({ isLoading, group, isOwner, isMember }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{group.groupName}</h2>
          <h3>{group.description}</h3>
          <h4>
            Group Owner: {group.owner.name} ({group.owner.email})
          </h4>
          {group.members.length > 0 ? (
            <MembersList members={group.members} />
          ) : (
            <h5>There are no members in this group.</h5>
          )}
          {isOwner && <button>Invite members</button>}
          {isMember && <button>Leave group</button>}
          {!isMember && !isOwner && <button>Join group</button>}
          {group.groupEvents.length > 0 ? (
            <EventsList events={group.groupEvents} />
          ) : (
            <h5>There are no upcoming events for this group.</h5>
          )}
          <Link to="/events/" state={{ groupID: group._id }}>
            <button>Create an event for this group</button>
          </Link>
          {isOwner && <button>Delete group</button>}
        </div>
      )}
    </div>
  );
}
