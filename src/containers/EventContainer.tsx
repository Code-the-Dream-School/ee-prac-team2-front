// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventView from "@components/EventView/EventView";

export default function EventContainer() {
  return (
    <div>
      <h2>EventContainer</h2>
      <p>Only makes requests and renders EventView</p>
      <EventView />
    </div>
  );
}
