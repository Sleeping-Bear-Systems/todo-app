import { JSX, useState } from "react";
import type { ToDoItem } from "./ToDoItem";
import { ToDoListLine } from "./ToDoListLine";
import { useAtom } from "jotai";
import { apiUrlAtom } from "./atoms";
import { ToDoDetails } from "./ToDoDetails";
import { ToDoForm } from "./ToDoForm";

export interface ToDoListProps {
    items: ToDoItem[];
}

export function ToDoList(props: ToDoListProps): JSX.Element {
    const [apiUrl] = useAtom(apiUrlAtom);
    console.log(apiUrl);
    const [selectedItem, setSelectedItem] = useState<ToDoItem | null>(null);
    const [editItem] = useState<ToDoItem | null>(null);
    console.log(editItem);

    return (
        <>
            <h1>To-Do Items</h1>
            <ul>
                {props.items.map((item) => {
                    return (
                        <ToDoListLine
                            key={item.id}
                            item={item}
                            selectItem={setSelectedItem}
                        />
                    );
                })}
            </ul>
            <hr />
            <ToDoDetails item={selectedItem} />
            <hr />
            <ToDoForm selectedItem={selectedItem} />
        </>
    );
}
