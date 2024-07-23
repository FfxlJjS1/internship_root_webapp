import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

import Header from './Components/Header'
import Footer from './Components/Fotter'

function App() {
  return (
    <>
      <Header className="content-container" />
      <Footer className="footer" />
    </>
  )
}

export default App
