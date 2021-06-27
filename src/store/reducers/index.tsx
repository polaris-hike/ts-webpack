import { combineReducers} from 'redux';
import { connectRouter} from 'connected-react-router';
import counters, {CounterState} from '@/store/reducers/counters';
import todos, {TodoState} from '@/store/reducers/todos';
import history from '@/history';

const reducers = {
  counters,
  todos,
  router: connectRouter(history)
}

// type CombinedState = {
//   [k in keyof ReducersType]: ReturnType<ReducersType[k]>
// }

const combinedReducer = combineReducers(reducers);

type CombinedState = ReturnType<typeof combinedReducer>

export { CombinedState, CounterState, TodoState}

export default combinedReducer;