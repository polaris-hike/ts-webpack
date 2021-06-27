import * as React from 'react';
import { connect} from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';
import { LocationDescriptorObject } from 'history';
import { CombinedState, CounterState} from '@/store/reducers';
import * as actions from '@/store/actions/counter';
import {todoLocationState} from '@/components/Todos';
import {asyncAdd} from '@/store/actions/counter';

interface Params {name:string}
type Props = CounterState & typeof actions & RouteComponentProps<Params, StaticContext>;

function Counter(props: Props) {
  const { count, add, minus, match:{params}} = props
  const location:LocationDescriptorObject<todoLocationState> = {pathname:"/todos", state:{name:"todoName"}}

  const handlePush = () => {
    props.go(location);
  }

  return (
    <div>
      <p>name:{params.name}</p>
      <span>{count}</span>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={handlePush}>go todos</button>
    </div>
  )
}

const mapStateToProps = (state:CombinedState): CounterState => state.counters

export default connect(
  mapStateToProps,
  actions
)(Counter)