import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function uploadFile(x) {
  console.log(x.name);
  fetch('upics',{method: "POST", body: x}).then(x => x.text()).then(x => console.log(x));
}

class App extends Component {
  render() {
    return (
       <input type="file" id="input" onChange={e => uploadFile(e.target.files[0])} /> 
    );
  }
}

export default App;
