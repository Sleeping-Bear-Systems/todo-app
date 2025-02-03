import { JSX } from "react";
import { ToDoItem } from "./ToDoItem";

export interface ToDoDetailsProps {
    item: ToDoItem | null;
}

export function ToDoDetails(props: ToDoDetailsProps): JSX.Element {
    return (
        <>
            {props.item !== null ? (
                <h1>Details for {props.item.name}</h1>
            ) : (
                <></>
            )}
        </>
    );
}
