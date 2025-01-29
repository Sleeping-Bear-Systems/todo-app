import { JSX } from "react";
import { ToDoItem } from "./ToDoItem";

export interface ToDoFormProps {
  selectedItem: ToDoItem | null;
}

export function ToDoForm(props: ToDoFormProps): JSX.Element {
  return (
    <div>
      {props.selectedItem ? (
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={props.selectedItem.name}
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}
