import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Todos from '@/components/Todos/index';
import {Provider} from 'react-redux';
import { Route, Link, Switch} from 'react-router-dom';
import { ConnectedRouter} from 'connected-react-router';
import store from '@/store';
import Counter from '@/components/Counter';
import history from '@/history';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <ul>
          <li><Link to="/counter/counterName">counter</Link></li>
          <li><Link to={{pathname:"/todos", state:{name:"todoName"}}}>todos</Link> </li>
        </ul>
        <Switch>
          <Route path="/counter/:name" component={Counter} />
          <Route path="/todos" component={Todos} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root')
);