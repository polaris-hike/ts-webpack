import {ADD_TODO} from '@/store/action-types';
import {TodosAction} from '@/store/actions/todos';
import {ITodo} from '@/models';

export interface TodoState {
  list: ITodo[]
}

const initialState:TodoState = {
  list: new Array<ITodo>()
}

export default function (state:TodoState = initialState,action:TodosAction):TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {list: [...state.list, action.payload]}
    default:
      return state;
  }
}