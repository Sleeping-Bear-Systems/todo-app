import { JSX, useState } from "react";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { ToDoForm } from "./ToDoForm";

export function App(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, _setItems] = useState<ToDoItem[]>([
    { id: "1", name: "Buy milk" },
    { id: "2", name: "Buy eggs" },
    { id: "3", name: "Buy bread" },
  ]);

  const [selectedItem, setSelectedItem] = useState<ToDoItem | null>(null);

  return (
    <>
      <ToDoList items={items} selectItem={setSelectedItem} />
      <ToDoForm selectedItem={selectedItem} />
    </>
  );
}
