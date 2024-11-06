import { atom } from 'recoil';
import { TodoData } from '../../types/commonTypes';

export const todosState = atom<TodoData[]>({
  key: 'todosState',
  default: [
    {
      id: 'milk',
      title: 'Milk',
      description: 'Milk',
      completed: false,
      timestamp: Date.now()
    },
    {
      id: 'eggs',
      title: 'Eggs',
      description: 'Eggs',
      completed: false,
      timestamp: Date.now()

    },
    {
      id: 'cheese',
      title: 'Cheese',
      description: 'Cheese',
      completed: false,
      timestamp: Date.now()
    },
  ],
});
