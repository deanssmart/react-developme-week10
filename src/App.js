import React from 'react';
import './App.css';
import Squares from './lifting-state/Squares';
import SignUp from './lifting-state/SignUp';

const App = () => (
  <>
    <Squares colour={ 'hotpink' } />
    <SignUp minimumLength={ 12 } />
  </>
);


export default App;
