import React from 'react';
import Main from './Main'
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="App" id="main">
      <Main/>
      <MessengerCustomerChat
      pageId="185506882345203"
      appId="363775251678392"
      />
    </div>


  );
}

export default App;
