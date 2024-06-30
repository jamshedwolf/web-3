
import './App.css'
import AboutMain from './Pages/about/AboutMain';
import Main from './Pages/home/Main'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Layout from './Layout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>



          <Routes>
            <Route path="/" element={<Main />} />

            
            <Route path="/about" element={<AboutMain />} />

          </Routes>
        </Layout>
      </BrowserRouter>


    </>
  )
}

export default App
