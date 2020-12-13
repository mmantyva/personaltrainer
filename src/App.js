import React from 'react';
import './App.css';
import Customers from './components/Customers';
import Home from './components/Home';
import Trainings from './components/Trainings';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar bg='info' variant='dark'>
        <Navbar.Brand><h2>Personal Training</h2></Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'><h4>Home</h4></Nav.Link>
          <Nav.Link as={Link} to='/customers'><h4>Customers</h4></Nav.Link>
          <Nav.Link as={Link} to='/trainings'><h4>Trainings</h4></Nav.Link>
        </Nav>
      </Navbar>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/customers' component={Customers} />
            <Route path='/trainings' component={Trainings} />
          </Switch>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
