import React, { Component } from 'react';
import logo from './logo.svg';
import socketIOClient from 'socket.io-client'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={

      input: ''
    }
    this.socket = socketIOClient('http://localhost:4004')
  }

  handleChange =(value)=>{
    this.setState({input: value})
  }

  handleClick =() =>{

     this.socket.emit('message',this.state.input)
     
    this.socket.on('news',(data)=>{
        console.log(data)
    })


  }
  
  render() {
      
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <input onChange={e=>this.handleChange(e.target.value)}/> <button onClick={this.handleClick} >Submit</button>
      </div>
    );
  }
}

export default App;
