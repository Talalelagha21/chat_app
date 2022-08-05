import React from 'react';

import Message from './Message';


class Messages extends React.Component{

  //scrolls to the bottom of the list once there is a new message that was sent
  componentDidUpdate() { 
      const objDiv = document.getElementById('messageList');
      objDiv.scrollTop = objDiv.scrollHeight;
  }
  
  render(){
      const messages = this.props.messages.map((message, i) => {
          return ( 
              <Message 
                  key={i}
                  username={message.username}
                  message={message.message}
                  fromMe={message.fromMe}
              />
          );
      });


      return (
          <div className="messages" id="messageList">
              {messages}
          </div>
      )
  }
};

Messages.defaultProps = {
};

export default Messages;
