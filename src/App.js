import React from 'react';
import './App.css';
import Squares from './lifting-state/Squares';
import SignUp from './lifting-state/SignUp';
import Button from './passing-data-up/Button';
import Form from './passing-data-up/Form';

const App = () => (
  <>
    <Squares colour={ 'hotpink' } />
    <SignUp minimumLength={ 12 } />
    <Button handleUpdate={ console.log } />
    <Form handleSubmit={ console.log } />
  </>
);


export default App;
