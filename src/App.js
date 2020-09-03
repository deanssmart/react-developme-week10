import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Squares from './lifting-state/Squares';
import SignUp from './lifting-state/SignUp';
import Button from './passing-data-up/Button';
import Form from './passing-data-up/Form';

import Clicked from './hooks/Clicked';
import Square from './hooks/Square';
import ToggleText from './hooks/ToggleText';
import Counter from './hooks/Counter';

import Header from './news/Header';
import Articles from './news/Articles';
import Article from './news/Article';
import CreateArticle from './news/CreateArticle';
import Footer from './news/Footer';


const App = () => (
  <Router>
    <Header />

    <Switch>
      <Route exact path='/challenges'>
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
      </Route>
      <Route exact path='/hooks'>
        <Clicked />
        <Square colour="hotpink" />
        <ToggleText initial="Hello" alternate="World" /> 
        <Counter initial={ 50 } max={ 100 } />
      </Route>
      <Route exact path='/news'>
          <Articles />
      </Route>
      <Route exact path='/news/create'>
          <CreateArticle />
      </Route>
      <Route exact path="/news/:id" render={ ({ match }) => (
          <Article id={ match.params.id } />
      ) } />
    </Switch>
    
    <Footer />
  </Router>
);


export default App;
