// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { useState } from "react";

interface ActivitiesListProps {
  list: Array<any>;
}

export default function Activities(props: ActivitiesListProps) {
  return (
    <div>
      <h1>Your Activities</h1>
      {props.list.map((item: any) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>{item.voteCount}</p>
        </div>
      ))}
    </div>
  );
}
