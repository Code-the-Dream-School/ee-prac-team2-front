// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export default function MembersListItem({ member }) {
  return (
    <li>
      <h5>{member.name}</h5>
      <h6>{member.email}</h6>
    </li>
  );
}
