import React from 'react';
import { FirebaseContext } from '../../components/Firebase';

const Landing = () => {
  return (
    <FirebaseContext.Consumer>
      <div>Landing</div>
    </FirebaseContext.Consumer>
  );
};

export default Landing;
