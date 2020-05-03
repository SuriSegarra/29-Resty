import React from 'react';
import Request from '../Request/Request';
import Header from '../Header/Header';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <Header/>
      <Request/>
    </div>
  );
}
