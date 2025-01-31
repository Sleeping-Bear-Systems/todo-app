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
                        <label htmlFor="id">ID:</label>
                        <br />
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={props.selectedItem.id}
                            readOnly
                        />
                        <br />
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={props.selectedItem.name}
                            readOnly
                        />
                    </div>
                    <br />
                    <div>
                        <button type="submit">Save</button>
                        <button type="button">Reset</button>
                        <button type="button">Cancel</button>
                    </div>
                </form>
            ) : (
                <></>
            )}
        </div>
    );
}
