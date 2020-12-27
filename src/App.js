import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login';
import Main from './main';


const App = () => {
  return (
    <div>
      <Route path="/" component={Login} exact={true}/>
      <Route path="/main" component={Main}/>
    </div>
  );
};

export default App;
