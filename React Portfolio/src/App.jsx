import React from 'react'
import { Outlet } from 'react-router-dom';
//import './App.css'
import Header from './components/Header'

function App () {
  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: '100px'}}>
        <Outlet />
      </main>
    </>
  );
}

export default App
