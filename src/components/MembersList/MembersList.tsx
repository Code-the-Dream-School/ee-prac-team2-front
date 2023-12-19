// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import MembersListItem from "@components/MembersList/MembersListItem";

export default function MembersList({ members }) {
  return (
    <div>
      <h4>Members:</h4>
      <ul>
        {members.map((member) => {
          return <MembersListItem member={member} />;
        })}
      </ul>
    </div>
  );
}
