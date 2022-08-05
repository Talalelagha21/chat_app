import React from 'react';


class Message extends React.Component{
  render(){

      //checks if the message was sent by the current user, if tru => add the css class
      const fromMe = this.props.fromMe ? 'from-me' : '';

      return (
          <div className={`message ${fromMe}`}>
              <div className='username'>
                  {this.props.username}
              </div>
              <div className="message-body">
                  {this.props.message}
              </div>

          </div>
          
      )
  }
};

Message.defaultProps = {
};

export default Message;
