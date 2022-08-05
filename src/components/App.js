import React from "react";
import ChatApp from "./ChatApp";
import '../styles/App.css'
import Login from "./Login";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
    }

    this.usernameChange = this.usernameChange.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }
  usernameChange(e) {
    this.setState({username: e.target.value})
  }
  
  usernameSubmitHandler(e) {
    e.preventDefault();
    this.setState({submitted: true, username: this.state.username})
  }
 
  
  render() {
    if(this.state.submitted) {
      return <ChatApp username={this.state.username} />
    }
    return <Login 
            usernameSubmitHandler={this.usernameSubmitHandler}
            usernameChange={this.usernameChange}/>
  }
}

export default App;