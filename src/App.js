import React, { Component } from 'react';
import Contact from './components/Contact';
import './App.css';


const user = {
  name: "Marion Ortiz",
  avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  online: true
}


class App extends Component {
  render() {
    return (
      <div>
        <Contact {...user} />
      </div>
    );
  }
}

export default App;
