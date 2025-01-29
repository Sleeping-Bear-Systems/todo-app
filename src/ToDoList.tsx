import { JSX } from "react";
import type { ToDoItem } from "./ToDoItem";
import { ToDoListLine } from "./ToDoListLine";

export interface ToDoListProps {
  items: ToDoItem[];
  selectItem: (item: ToDoItem | null) => void;
}

export function ToDoList(props: ToDoListProps): JSX.Element {
  return (
    <>
      <h1>To-Do Items</h1>
      <ul>
        {props.items.map((item) => {
          return (
            <ToDoListLine
              key={item.id}
              item={item}
              selectItem={props.selectItem}
            />
          );
        })}
      </ul>
    </>
  );
}
