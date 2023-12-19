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
          <MembersList members={group.members} />
          {isMember && <button>Leave group</button>}
          {!isMember && !isOwner && <button>Join group</button>}
          <EventsList />
          <Link to="/events/" state={{ groupID: group._id }}>
            <button>Create an event for this group</button>
          </Link>
          {isOwner && <button>Delete group</button>}
        </div>
      )}
    </div>
  );
}
