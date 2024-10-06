import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';


const LazyComponent = lazy(() => import('./components/LazyComponent'));
const Hom =lazy(()=>import('./pages/Hom'))
const Contact = lazy(()=>import('./pages/Contact'))
const About = lazy(()=> import('./pages/About'))
function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/lazy" element={<LazyComponent />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
