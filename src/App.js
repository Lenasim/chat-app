import React, { Component } from 'react';
import ContactList from './components/ContactList';
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
  state = {
    online = false;
  }
  userStatus = () =>{
    this.setState(current => ({ online: !current.online }))
  }
  render() {
    <div>
      <ContactList />

    </div>
  }
}

export default App;
