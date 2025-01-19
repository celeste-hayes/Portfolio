import React from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: '100px'}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
