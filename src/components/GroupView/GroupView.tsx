// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsList from "@components/EventsList/EventsList";
import MembersList from "@components/MembersList/MembersList";

export default function GroupView({ isLoading, group, isOwner, isMember }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{group.groupName}</h2>
          <h3>{group.description}</h3>
          {isMember ? (
            <button>Leave group</button>
          ) : (
            <button>Join group</button>
          )}
          <MembersList />
          <EventsList />
          {isOwner ? <button>Delete group</button> : <button></button>}
        </div>
      )}
    </div>
  );
}
