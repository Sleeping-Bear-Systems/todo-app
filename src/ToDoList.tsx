import { JSX } from "react";
import { ToDoItem } from "./ToDoItem";

export interface ToDoListProps {
  items: ToDoItem[];
}

export function ToDoList(props: ToDoListProps): JSX.Element {
  return (
    <>
      <h1>To-Do Items</h1>
      <ul>
        {props.items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
