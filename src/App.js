import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Callback from './Callback';
import Home from './Home';
import NavBar from './NavBar/NavBar';


function App() {

  // return (
  //   <div>
  //     <NavBar/>
  //     <p>Work in progress.</p>
  //   </div>
  // )

  return (
    
    <div className="App" >
      <Route exact path='/NavBar/Navbar' component={NavBar} exact />
      <Route exact path='/' component={Home} exact />
      <Route exact path='/callback' component={Callback} exact />
    </div>
    
  )
}

export default App;
