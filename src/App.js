import React, { Component } from 'react';
import Contact from './components/Contact';
import './App.css';


const Marion = {
  name: "Marion Ortiz",
  avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  online: true
}

const Katrina = {
  name: "Katrina Knight",
  avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  online: false
}

const Charlie = {
  name: "Charlie Jennings",
  avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  online: true
}



class App extends Component {
  render() {
    return (
      <div>
        <Contact {...Marion} />
        <Contact {...Katrina} />
        <Contact {...Charlie} />
      </div>
    );
  }
}

export default App;
