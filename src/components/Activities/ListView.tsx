import React from "react";

import { Activities } from "./Definition";

interface PropsType<T> {
  items: T[];
  renderer: (item: T) => React.ReactNode;
}

export default function ListView<T extends Activities>(props: PropsType<T>) {
  return (
    <ul>
      {props.items.map((item) => {
        return <li key={item.id}>{props.renderer(item)}</li>;
      })}
    </ul>
  );
}
