import React from 'react';
import './App.css';
import Customers from './components/Customers';
import Trainings from './components/Trainings';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar bg='info' variant='dark'>
        <Navbar.Brand>Personal Training</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/customers'>Customers</Nav.Link>
          <Nav.Link as={Link} to='/trainings'>Trainings</Nav.Link>
        </Nav>
      </Navbar>
        <div>
          <Switch>
            <Route path='/customers' component={Customers} />
            <Route path='/trainings' component={Trainings} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
