import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Concact/Concact';
import Services from './components/pages/Services/Services';
import About from './components/pages/About/About';
import Carrior from './components/pages/Carrior/Carrior';
import Frontend from './components/pages/Carrior/Job/Frontend';
import Full from './components/pages/Carrior/Job/Full';
import Mern from './components/pages/Carrior/Job/Mern';
import Back from './components/pages/Carrior/Job/Back';
import MyTabs from './components/MyTabs';
import menu from './menu.json';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MyTabs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/front' element={<Frontend />} />
        <Route path='/back' element={<Back />} />
        <Route path='/fullstack' element={<Full />} />
        <Route path='/mern' element={<Mern />} />
        <Route path='/services' element={<Services />} />
        <Route path='/carrier' element={<Carrior />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* No Pages Available Route */}
        <Route path='*' element={<div className='container d-flex justify-content-center align-items-center' style={{ height: '78vh' }}><img src="./errorpage.avif" alt="404" height={220} /></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
