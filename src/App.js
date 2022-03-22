import React from 'react';
import Link from './components/Links'
import LinkForm from './components/LinkForm'
import './App.css';

function App() {
  return (
    <div className="container p-5">
      <div className="row">
     <LinkForm />
    <Link />
    </div>
    </div>
  );
}

export default App;
