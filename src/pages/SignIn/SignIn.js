import React from 'react';

import SignUpLink from '../SignUp/components/SignUpLink/SignUpLink';
import SignInForm from './components/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <div>
      <SignInForm />
      <SignUpLink />
    </div>
  );
};

export default SignIn;
