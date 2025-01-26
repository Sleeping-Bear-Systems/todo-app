import { JSX, useState } from "react";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";

export function App(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, _setItems] = useState<ToDoItem[]>([
    { id: "1", name: "Buy milk" },
    { id: "2", name: "Buy eggs" },
    { id: "3", name: "Buy bread" },
  ]);

  return (
    <>
      <ToDoList items={items} />
    </>
  );
}
