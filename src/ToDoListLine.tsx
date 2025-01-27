import { JSX } from "react";
import { ToDoItem } from "./ToDoItem";

export interface ToDoListLineProps {
  item: ToDoItem;
  onClick: (item: ToDoItem) => void;
}

export function ToDoListLine(props: ToDoListLineProps): JSX.Element {
  return (
    <li key={props.item.id} onClick={()=>props.onClick(props.item)}>
      {props.item.name}
    </li>
  );
}
