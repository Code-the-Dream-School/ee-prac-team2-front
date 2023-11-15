import React from "react";

interface PropsType<T> {
  items: T[];
  renderer: (item: T, index: number, arr: T[]) => React.ReactNode;
  className?: string;
}

export default function ListView<T extends { id: number }>(
  props: PropsType<T>
) {
  return (
    <ul className={props.className ?? ""}>
      {props.items.map((item, index, arr) => {
        return <li key={item.id}>{props.renderer(item, index, arr)}</li>;
      })}
    </ul>
  );
}
