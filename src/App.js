import React from 'react';
import './App.css';
import Squares from './lifting-state/Squares';
import SignUp from './lifting-state/SignUp';
import Button from './passing-data-up/Button';

const App = () => (
  <>
    <Squares colour={ 'hotpink' } />
    <SignUp minimumLength={ 12 } />
    <Button handleUpdate={ console.log } />
  </>
);


export default App;
