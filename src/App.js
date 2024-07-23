import React from 'react';
import DocList from './components/DocList.jsx';
import Form from './components/Form.jsx';
import './App.css';






function App() {
  return (
    <div className="App">
      <h1 className="header">Document Checker</h1>
      <h4 className="desc">Choose The Document Type To Check.</h4>
      <DocList />
      <Form />
    </div>
  );
}

export default App;