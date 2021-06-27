import { ADD_TODO} from '@/store/action-types';
import {ITodo} from '@/models';

export function addTodo(todo:ITodo) {
  return {type:ADD_TODO,payload:todo};
}

export type TodosAction = ReturnType<typeof addTodo>;