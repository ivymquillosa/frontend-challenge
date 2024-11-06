import { selector } from 'recoil';
import { TodoData } from '../../types/commonTypes';
import { todosState } from '../atoms/todoAtoms';

export const completedTodosSelector = selector<TodoData[]>({
  key: 'completedTodosSelector',
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.filter(todo => todo.completed);
  },
});
