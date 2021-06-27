import * as React from 'react';
import * as hoistNonReactStatics from 'hoist-non-react-statics';

export const defaultProps = {
  settings: {
    maxLength: 6,
    placeholder: '请输入待办事项'
  }
};

export type DefaultPropsType = typeof defaultProps;

export const withDefaultProps = <P extends DefaultPropsType>(
  OldComponent: React.ComponentType<P>) => {
  type OwnProps = Omit<P, keyof DefaultPropsType>
  class NewComponent extends React.Component<OwnProps> {
    render() {
      let props = {...defaultProps, ...this.props} as P;
      return (
        <OldComponent {...props} />
      );
    }
  }
  return hoistNonReactStatics(NewComponent,OldComponent);
}
