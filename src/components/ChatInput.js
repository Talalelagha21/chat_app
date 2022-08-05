import React from 'react';
import "../styles/ChatInput.css"

class ChatInput extends React.Component{
  constructor(props){
      super(props);
      this.state={chatInput: ''}

      this.textChangeHandler = this.textChangeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this)
  }

  textChangeHandler(e){
      this.setState({chatInput: e.target.value})
  }

  submitHandler(e){
      e.preventDefault(); // prevents HTML from refreashing page when the page is submitted
      this.props.onSend(this.state.chatInput)
      this.setState({chatInput: ''}) // clears chatbox
  }
  
  
  render(){
      
      return(
          <form className="chat-input" onSubmit={this.submitHandler}>
              <input type="text"  
                     id="chat-input"
                     onChange={this.textChangeHandler}
                     value={this.state.chatInput}
                     placeholder="Message..."
                     required
              />
          </form>
      )
  }
};

ChatInput.defaultProps = {
};

export default ChatInput;
