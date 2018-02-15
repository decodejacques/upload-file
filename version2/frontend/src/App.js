import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function uploadFile(x) {
  var filename = x.name;
  var fileExtension = filename.split('.').pop();
  fetch('/upics?ext=' + fileExtension,{method: "POST", body: x}) // 
}

class App extends Component {
  render() {
    return (
       <input type="file" id="input" onChange={e => uploadFile(e.target.files[0])} /> 

    );
  }
}

export default App;
