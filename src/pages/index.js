import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Navigation from '../components/Navigation/Navigation';
import Landing from './Landing/Landing';
// consts
import * as ROUTES from '../consts/routes';
import SignUp from './SignUp/SignUp';
import PasswordRestore from './PasswordRestore/PasswordRestore';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import Account from './Account/Account';
import Admin from './Admin/Admin';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.RESTORE} component={PasswordRestore} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={Admin} />
      </div>
    </Router>
  );
};

export default App;
