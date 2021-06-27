import * as React from 'react';
import { ITodo} from '@/models';

type Props = {
  todo: ITodo
}

const TodoItem:React.FC<Props> = (props: Props) => {
  return (
    <li>{props.todo.text}</li>
  )
}

export default TodoItem