import { JSX } from "react";
import type { ToDoItem } from "./ToDoItem";
import { ToDoListLine } from "./ToDoListLine";

export interface ToDoListProps {
  items: ToDoItem[];
}

export function ToDoList(props: ToDoListProps): JSX.Element {
  function onClick(item: ToDoItem): void {
    alert(item.name);
  }

  return (
    <>
      <h1>To-Do Items</h1>
      <ul>
        {props.items.map((item) => {
          return <ToDoListLine key={item.id} item={item} onClick={onClick} />;
        })}
      </ul>
    </>
  );
}
