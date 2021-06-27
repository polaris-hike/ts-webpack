import * as React from 'react';
import {ITodo} from '@/models';
import TodoInput from '@/components/Todos/TodoInput';
import TodoItem from '@/components/Todos/TodoItem';
import {connect} from 'react-redux';
import {CombinedState, TodoState} from '@/store/reducers';
import * as actions from "@/store/actions/todos"
import {RouteComponentProps} from 'react-router-dom';
import {StaticContext} from 'react-router';

interface Params {}
export interface todoLocationState {name:string}
type Props = TodoState & typeof actions & RouteComponentProps<Params, StaticContext, todoLocationState>;


interface State {
  todos: ITodo[]
}

class Todos extends React.Component<Props, State>{
  constructor(props:Props) {
    super(props);
  }
  public render() {
    const { list, addTodo, location} = this.props
    return (
      <div>
        <p>name:{location.state.name}</p>
        <TodoInput addTodo={addTodo}/>
        <ul>
          {
            list.map((todo:ITodo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state:CombinedState): TodoState => state.todos

export default connect(mapStateToProps,actions)(Todos);