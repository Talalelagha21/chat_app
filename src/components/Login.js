import React from "react";
import ChatApp from "./ChatApp";
import App from "./App";
import '../styles/Login.css'

class Login extends React.Component{
  
  render() {
    return (
    <div>  
      <form onSubmit={this.props.usernameSubmitHandler} className="username-container">
        <h1>Sign In</h1>
        <div className="outer">  
          <input id="username" onChange={this.props.usernameChange} type="text" placeholder="Username" required/>
          <div className="box-top">
            <div className="bg-inner"></div>
          </div>
          <div className="box-right">
            <div className="bg-inner"></div>
          </div>
          <div className="box">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div id="outer-password">
          <input id="password" type="text" placeholder="Password"/>
        </div>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default Login;
