import {ADD, MINUS} from '@/store/action-types';
import { push, CallHistoryMethodAction } from 'connected-react-router';
import {LocationDescriptorObject} from 'history';
import {todoLocationState} from '@/components/Todos';


export function add() {
  return {type:ADD};
}

export function minus() {
  return {type:MINUS};
}

export function go(location:LocationDescriptorObject<todoLocationState>):
  CallHistoryMethodAction<[LocationDescriptorObject<todoLocationState>]> {
  return push(location);
}

export type CounterAction = ReturnType<typeof add> | ReturnType<typeof minus> | ReturnType<typeof go>;