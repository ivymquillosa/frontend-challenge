import { useRecoilState } from 'recoil';
import { todosState } from '../atoms/todoAtoms';
import { TodoData } from '../../types/commonTypes';
import { v4 as uuidv4 } from 'uuid';

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const addTodo = (title: string, description: string) => {
    const newTodo: TodoData = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      timestamp: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  const clearAllTodos = () => setTodos([]);

  const updateTodo = (updatedTodo: TodoData) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    clearAllTodos,
    updateTodo,
    deleteTodo,
  };
};
