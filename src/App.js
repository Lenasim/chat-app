import React, { Component } from 'react';
import Contact from './components/Contact';
import users from './components/ContactList';
import './App.css';

function Users() {
  return users.map(user => <Contact {...user} />)
}

class App extends Component {
  render() {
    return (
      <div>
        {Users()}
      </div>
    );
  }
}

export default App;
