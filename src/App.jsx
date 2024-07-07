
import './App.css'
import AboutMain from './Pages/about/AboutMain';
import Main from './Pages/home/Main'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Layout from './Layout';
import Maincontact from './Pages/contact/Maincontact';
import Mainacademy from './Pages/academy/Mainacademy';
import Clubmain from './Pages/club/Clubmain';
import Networkmain from './Pages/networking/Networkmain';
import Mintmain from './Pages/mint/Mintmain';

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>



          <Routes>
            <Route path="/" element={<Main />} />

            
            <Route path="/about" element={<AboutMain />} />
            <Route path="/contact" element={<Maincontact />} />
            <Route path="/academy" element={<Mainacademy />} />
            <Route path="/club" element={<Clubmain />} />
            <Route path="/co-networking" element={<Networkmain/>} />
            <Route path="/mint" element={<Mintmain/>} />
 
            
            
            
            
          

          </Routes>
        </Layout>
      </BrowserRouter>


    </>
  )
}

export default App
