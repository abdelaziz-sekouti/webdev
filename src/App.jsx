import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <Home />
          </AppLayout>
        }
      />
      <Route
        path="/services"
        element={
          <AppLayout>
            <Services />
          </AppLayout>
        }
      />
      <Route
        path="/portfolio"
        element={
          <AppLayout>
            <Portfolio />
          </AppLayout>
        }
      />
      <Route
        path="/about"
        element={
          <AppLayout>
            <About />
          </AppLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <AppLayout>
            <Contact />
          </AppLayout>
        }
      />
    </Routes>
    </>
  );
}

export default App;