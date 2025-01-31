import { JSX } from "react";
import { ToDoItem } from "./ToDoItem";

export interface ToDoListLineProps {
    item: ToDoItem;
    selectItem: (item: ToDoItem) => void;
}

export function ToDoListLine(props: ToDoListLineProps): JSX.Element {
    return (
        <li key={props.item.id}>
            <span onClick={() => props.selectItem(props.item)}>
                {props.item.name}
            </span>
            <button>Edit</button>
        </li>
    );
}
