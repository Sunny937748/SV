import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/Form/SignIn/SignIn';
import SignUp from './components/Form/SignUp/SignUp';
import signOut from './components/signOut/SignOut';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/signOut" component={signOut} />
    </React.Fragment>
  );
}

export default App;
