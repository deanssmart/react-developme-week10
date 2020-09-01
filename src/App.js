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
    <Form
        handleSubmit={ console.log }
        fields={ [
            { label: "Name", name: "name", type: "text" },
            { label: "E-mail", name: "email", type: "email" },
            { label: "Telephone Number", name: "telephone", type: "tel" },
            { label: "Date of Birth", name: "dob", type: "date" },
      ]}
    />
  </>
);


export default App;
