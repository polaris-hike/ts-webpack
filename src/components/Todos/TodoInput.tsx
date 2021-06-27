import * as React from 'react';
import {ITodo} from '@/models';
import {DefaultPropsType,withDefaultProps} from '@/utils';

interface OwnProps {
  addTodo: (todo: ITodo) => void
}

type Props = OwnProps & DefaultPropsType

interface State {
  text: string
}

let id = 0;

class TodoInput extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {text: ''};
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value
    });
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = this.state.text.trim();
    if (!text) return;
    this.props.addTodo({
      id: id++,
      text: this.state.text
    });
    this.setState({text: ''});
  };

  public render() {
    const {text} = this.state;
    const {settings} = this.props;
    console.log(settings);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
          maxLength={settings?.maxLength}
          placeholder={settings?.placeholder}
        />
        <button type='submit'>添加</button>
      </form>
    );
  }
}


export default withDefaultProps(TodoInput)