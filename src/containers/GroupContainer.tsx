// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import GroupView from "@components/GroupView/GroupView";

export default function GroupContainer() {
  return (
    <div>
      <h2>GroupContainer</h2>
      <p>Only makes requests and renders GroupView</p>
      <GroupView />
    </div>
  );
}
