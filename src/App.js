import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Card from './components/Card';
import Card1 from './components/Card1';
import Footer from './components/Footer';
import Form from './components/Form';
import Carousel from "./components/Carousel";
import Carousel1 from "./components/Carousel1";




function App() {
  return (
    <div className="App">
        
       < NavBar/>
        <Header/>
        <Card />
        <Carousel />
        <Card1/>
        <Carousel1 />
        <Form />
        <Footer />
    </div>
  )
}

export default App
