import { Button, InputFields } from "@stack/handcrafted-components"
import { AlertDialog } from "@stack/radix-components"
import TodoList from "./components/TodoList"
import { useTodos } from "./recoil/hooks/useTodos";
import { useState } from "react";

function App() {
  const { addTodo, clearAllTodos } = useTodos();
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTitle, newDescription);
    setNewTitle("");
    setNewDescription("");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-4 pt-14 max-w-[430px] w-full">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <div className="border-y border-default-100">
          <TodoList />
          <form onSubmit={handleAddTodo} className="flex items-center justify-between p-3 gap-3">
            <div className="h-5 w-5 font-semibold leading-none pb-0.5 text-white bg-secondary-500 rounded-full flex items-center justify-center">+</div>
            <InputFields
              placeholder="Add new todo"
              variant="flat"
              className="flex-1 !border-none text-default-800"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Button type="submit" color="secondary" radius="soft" size="sm" className="w-fit">
              Add Item
            </Button>
          </form>
        </div>
      
        {/* <Divider /> */}
        <div className="flex items-center justify-end text-sm font-semibold p-3">
          <AlertDialog
            trigger={
              <button className="bg-default-50 hover:bg-default-200  py-1.5 px-4 rounded">
                Clear All Todo's
              </button>
            }
            title="Clear All Task"
            description="Are you sure you want to clear all tasks? This action cannot be undone."
            actionLabel="Clear"
            onActionClick={clearAllTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default App