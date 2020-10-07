import React, { Component } from 'react';
import Login from './component/Login'
import Main from './component/Main'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      id:"",
      name:"",
      email:"",
      password:"",
      loggedIn:false
    }
    this.setMainState = this.setMainState.bind(this)
  }

  setMainState(name, value){
    this.setState({[name]: value})
  }

  render(){
    // console.log("from App props: ", this.state)
    if (!this.state.loggedIn){
      return (
        <div className="App">
          <header className="App-header">
            <Login
              id={this.state.id}
              name={this.state.name}
              email={this.state.email}
              password={this.state.password}
              loggedIn={this.state.loggedIn} 
              setMainState={this.setMainState}
            />
          </header>
        </div>
      )
    }
    else {
      return(
        <div className="App">
          <header className="App-header">        
            <Main
              id={this.state.id}
              name={this.state.name}
            />
          </header>
        </div>
      );
    }
  }
}

export default App;
