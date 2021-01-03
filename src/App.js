import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login';
import SystmeInfoMain from './contents/SystemInfo/SystemInfoMain';


const App = () => {
  return (
    <div>
      <Route path="/" component={Login} exact={true}/>
      <Route path="/SystmeInfoMain" component={SystmeInfoMain}/>
    </div>
  );
};

export default App;
