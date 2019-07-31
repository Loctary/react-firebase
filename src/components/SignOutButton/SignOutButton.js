import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
// HOCs
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
// actions
import { userSignOut } from '../../store/user/user';

const onClick = props => {
  props.firebase.doSignOut();
  props.userSignOut();
};

const SignOutButton = props => (
  <button type="button" onClick={() => onClick(props)}>
    Sign Out
  </button>
);

SignOutButton.propTypes = {
  firebase: PropTypes.shape({
    doSignOut: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = { userSignOut };

export default compose(
  withFirebase,
  connect(
    null,
    mapDispatchToProps
  )
)(SignOutButton);
