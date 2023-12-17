// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import MembersListItem from "@components/MembersList/MembersListItem";

export default function MembersList() {
  return (
    <div>
      <h4>MembersList</h4>
      <p>Displays Groups&apos;s Members</p>
      {/* use a mapped array here */}
      <MembersListItem />
      <MembersListItem />
      <MembersListItem />
      <MembersListItem />
    </div>
  );
}
