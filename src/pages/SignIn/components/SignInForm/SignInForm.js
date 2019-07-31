import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
// HOCs
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../../../components/Firebase';
// consts
import * as ROUTES from '../../../../consts/routes';
// actions
import { userSignIn } from '../../../../store/user/user';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const {
      state: { email, password },
      props: { firebase, history },
    } = this;

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
        <input name="password" value={password} onChange={this.onChange} type="password" placeholder="Password" />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

SignIn.propTypes = {
  firebase: PropTypes.shape({
    doSignInWithEmailAndPassword: PropTypes.func.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  userSignIn,
};

export default compose(
  withRouter,
  withFirebase,
  connect(
    null,
    mapDispatchToProps
  )
)(SignIn);
