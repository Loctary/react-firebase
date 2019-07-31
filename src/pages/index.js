import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose } from 'recompose';
// HOCs
import { connect } from 'react-redux';
import { withFirebase } from '../components/Firebase';
// components
import Navigation from '../components/Navigation/Navigation';
import Landing from './Landing/Landing';
import SignUp from './SignUp/SignUp';
import PasswordRestore from './PasswordRestore/PasswordRestore';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import Account from './Account/Account';
import Admin from './Admin/Admin';
// consts
import * as ROUTES from '../consts/routes';
// actions
import { userSignIn } from '../store/user/user';

class App extends Component {
  componentDidMount() {
    const { props } = this;
    props.firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) props.userSignIn(authUser);
    });
  }

  render() {
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
  }
}

App.propTypes = {
  firebase: PropTypes.shape({
    auth: PropTypes.shape({
      onAuthStateChanged: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  userSignIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = { userSignIn };

export default compose(
  withFirebase,
  connect(
    null,
    mapDispatchToProps
  )
)(App);
