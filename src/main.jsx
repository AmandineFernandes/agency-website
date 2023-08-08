import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Platon from './components/Platon';
// eslint-disable-next-line no-unused-vars
import Sedal from './components/Sedal';
// eslint-disable-next-line no-unused-vars
import Solane from './components/Solane';
import Navbar from './components/Navbar';
import './App.css'


// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/platon" element={<Platon />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
