import { AlertDialog, Checkbox, ScrollArea } from "@stack/radix-components";
import { useTodos } from "../recoil/hooks/useTodos";


const TodoList = () => {
  const { todos, updateTodo, deleteTodo } = useTodos();

  const handleDeleteClick = (id: string) => {
    deleteTodo(id); 
  };

  const handleCheckboxChange = (id: string, checked: boolean | 'indeterminate') => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      const updatedTodo = {
        ...todo,
        completed: !!checked,
      };
      updateTodo(updatedTodo);
    }
  };

  return (
    <ScrollArea className="max-h-[calc(100vh-24rem)] pr-3">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="border-b border-default-100">
            <div className='flex items-center text-default-800 text-sm gap-3 p-3'>
              <Checkbox
                id={`checkbox-${todo.id}`}
                className='h-5 w-5 border-2 rounded-full'
                color='secondary'
                checked={todo.completed}
                onCheckedChange={(checked) => handleCheckboxChange(todo.id, !!checked)}
              />
              <div className={`flex-1 flex flex-col gap-0.5 ${todo.completed ? 'line-through opacity-50' : ''}`}>
                <label 
                  htmlFor={`checkbox-${todo.id}`}
                  className='py-0.5 line-clamp-1 text-base font-medium text-default-800'>
                  {todo?.title}
                </label>
              </div>
              <div className='flex gap-3'>
                <AlertDialog
                  trigger={
                    <button className="text-danger-500">
                      Delete
                    </button>
                  }
                  title="Delete Task"
                  description="Are you sure you want to delete this task? This action cannot be undone."
                  actionLabel="Delete"
                  onActionClick={() => handleDeleteClick(todo.id)}
                />
              </div>
            </div>
            {/* <Divider /> */}
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default TodoList;
